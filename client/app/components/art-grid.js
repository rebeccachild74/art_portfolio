import Component from '@glimmer/component';
// import artFiles from '../../public/assets/images';

export default class ArtGridComponent extends Component {

    constructor() {
        super(...arguments);
    }

    artworkImages = [
        "cat1.jpg",
        "puffer.jpg",
        "tree.jpg",
        "weinerdog.jpg"
    ]
}
