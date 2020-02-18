import React, { cloneElement, Children } from 'react';
import { makeDecorator } from '@storybook/addons';

const createFieldsObject = fields => {
  if (!fields) {
    return {};
  }
  return Object.keys(fields).reduce((acc, key) => {
    const value = fields[key];
    const isStringValue = typeof value === 'string';
    acc[key] = isStringValue ? { value } : value;
    return acc;
  }, {});
};

const StoryContainer = ({ storyProps, children }) => {
  const childComponents = Children.map(children, child => {
    return cloneElement(child, {
      ...storyProps,
      fields: createFieldsObject(storyProps.fields)
    });
  });
  return <>
    {childComponents}
  </>;
};

export const withSitecoreProps = makeDecorator({
  name: 'withSitecoreProps',
  allowDeprecatedUsage: false,
  wrapper: (getStory, context) => {
    const story = getStory(context);
    return (
      <StoryContainer storyProps={story.props}>
        {story}
      </StoryContainer>
    );
  }
});