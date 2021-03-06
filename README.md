# storybook-decorator-sitecoreprops
SitecoreProps is a Storybook addon for normalizing nested Sitecore JSS field props.

## Why does this exist?
Sitecore JSS does a great job of putting front-end developers in the driver's seat of project development, but it does have a few quirks. One of those is the `fields` prop that must be passed to its provided JSS React content components, which expects an object formatted like this:

```
{
  fields: {
    heading: {
      value: 'Value'
    }
  }
}
```

In practice, that means passing props like this:

```
import { Text } from '@sitecore-jss/sitecore-jss-react';

const CustomComponent = ({fields}) => (
  <div className="custom-component">
    <Text fields={fields.heading} />
  </div>
);

export default CustomComponent;
```

This structure can create pretty verbose sample data structures in Storybook stories. To combat this, the SitecoreProps decorator will automatically decorate stories to build out the nested value object whenever a fields property is passed to it. That means you can write sample data like this, without worrying about the extra layer of nesting:

```
{
  fields: {
    heading: 'Value'
  }
}
```

## Installation
Install the following npm module in your project:

```
npm i --save-dev @degjs/storybook-decorator-sitecoreprops
```

To install for all stories, import `withSitecoreProps` and add the decorator within `.storybook/preview.js`, like this:

```
import { addDecorator } from '@storybook/react';
import { withSitecoreProps } from '@degjs/storybook-decorator-sitecoreprops';

addDecorator(withSitecoreProps);
```
