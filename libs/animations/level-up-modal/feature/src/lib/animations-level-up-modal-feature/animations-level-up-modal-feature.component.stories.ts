import { Meta } from '@storybook/angular';
import { AnimationsLevelUpModalFeatureComponent } from './animations-level-up-modal-feature.component';

export default {
  title: 'AnimationsLevelUpModalFeatureComponent',
  component: AnimationsLevelUpModalFeatureComponent,
} as Meta<AnimationsLevelUpModalFeatureComponent>;

export const Primary = {
  render: (args: AnimationsLevelUpModalFeatureComponent) => ({
    props: args,
  }),
  args: {},
};
