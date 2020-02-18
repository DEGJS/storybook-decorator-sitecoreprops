import React, { cloneElement, Children } from 'react';
import { makeDecorator } from '@storybook/addons';

const createFieldsObject = fields => {
  return Object.keys(fields).reduce((acc, key) => {
    const value = fields[key];
    const isStringValue = typeof value === 'string';
    acc[key] = isStringValue ? { value } : value;
    return acc;
  }, {});
};

const StoryContainer = ({ storyProps, children }) =>
  Children.map(children, child => {
    if (!storyProps.fields) {
      return child;
    }
    return cloneElement(child, {
      ...storyProps,
      fields: createFieldsObject(storyProps.fields)
    });
  });

export const withSitecoreProps = makeDecorator({
  name: 'withSitecoreProps',
  allowDeprecatedUsage: false,
  wrapper: (getStory, context) => {
    const story = getStory(context);
    if (!story.props.fields) {
      return story;
    }
    return (
      <StoryContainer storyProps={story.props}>
        {story}
      </StoryContainer>
    );
  }
});