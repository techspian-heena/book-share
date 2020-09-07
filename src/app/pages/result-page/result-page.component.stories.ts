import { ResultPageComponent } from "./result-page.component";
import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

storiesOf('Result', module)
  .add('books details', () => ({
    component: ResultPageComponent,
    props: {
        result: true,
        books:
            {
               id: 1,
               title: "Percy Jackson",
               category: "English",
               description: "sdfdfffffffff" 
            }
        
       // btnClicked: action('👊 Button was clicked')
    }
  }));