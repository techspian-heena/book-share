import { CardComponent } from './card.component';
import { storiesOf } from '@storybook/angular';

storiesOf('Card', module)
  .add('empty', () => ({
    component: CardComponent,
    props: {
      storybookColor: 'tomato'
    }
  }))

  .add('with title', () => ({
    component: CardComponent,
    props: {
      storybookColor: 'violet',
      book: {title: 'The Testaments'}
    }
  }))
  .add('with title and category', () => ({
    component: CardComponent,
    props: {
      storybookColor: 'blue',
      book: {title: 'The Testaments', category: 'Science'}
    }
  }));
