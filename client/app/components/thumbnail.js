import Component from '@glimmer/component';

export default class ThumbnailComponent extends Component {
    constructor() {
        super(...arguments);
        this.filePath = `path: ${this.args.fileName}`;
    }
}
