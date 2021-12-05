import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
} as ComponentMeta<typeof Main>;

export const BasicMain: ComponentStory<typeof Main> = () => (
  <Main
    title={text('title', 'React avançado')}
    description={text('description', 'Typescript, ReactJS, NextJS e Styled Components')}
  />
);
