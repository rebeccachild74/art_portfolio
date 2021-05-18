import Component from '@glimmer/component';

export default class ContactFormComponent extends Component {
    get pieceName() {
        return this.args.pieceName ?? 'Test123';
    }

    get availablePrintSizes() {
        // Add logic based on the piece dimensions
        return this.args.availablePrintSizes ?? ['16 x 20', '12 x 12'];
    }

    get isSellingPrints() {
        return this.args.isSellingPrints ?? false;
    }
}