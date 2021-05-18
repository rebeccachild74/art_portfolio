import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PieceController extends Controller {
    @tracked showContactForm = true; // should default to false

    @action
    updateFormVisibility() {
        this.showContactForm = !this.showContactForm;
        console.log(`Clicked!! Now value is: ${this.showContactForm}`);
    }
}
