import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PieceController extends Controller {
    @tracked showContactForm = false; // should default to false

    @action
    updateFormVisibility() {
        this.showContactForm = !this.showContactForm;
    }

    setFormVisibilityFalse() {
        this.showContactForm = false;
    }
}
