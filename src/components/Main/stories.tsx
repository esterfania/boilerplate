// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
} as ComponentMeta<typeof Main>;

const defaultArgs = {
  title: 'React avançado',
  description: 'Typescript, ReactJS, NextJS e Styled Components',
};

const Template: ComponentStory<typeof Main> = args => <Main {...args} />;

export const BasicMain = Template.bind({});

BasicMain.args = defaultArgs;
