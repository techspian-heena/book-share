import { storiesOf, moduleMetadata } from '@storybook/angular';
import { FooterComponent } from './footer.component';

storiesOf('Footer', module)
    .addDecorator(
        moduleMetadata({
            declarations: [FooterComponent]
        })
    )
    .add(
        'Default',
        () => ({
            template: `
            <app-footer></app-footer>
            `,
            props: {
            }
        })
    );
