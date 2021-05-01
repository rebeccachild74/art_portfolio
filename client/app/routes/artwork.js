import Route from '@ember/routing/route';

class Artwork {
    constructor({ pieces }) {
        this.pieces = pieces;
    }
}
class Piece {
    constructor({ id, name, medium, filePath }) {
        this.id = id;
        this.name = name;
        this.filePath = filePath;
        this.medium = medium;
    }
}

export default class ArtworkRoute extends Route {
    model() {
        let cat = new Piece({
            id: 'cat',
            name: 'Funny Cat',
            filePath: "cat1.jpg",
            medium: 'Photograph, 35mm',
        });

        let fish = new Piece({
            id: 'fish',
            name: 'Puffer Fish',
            filePath: "puffer.jpg",
            medium: 'Photograph, 35mm',
        });

        let tree = new Piece({
            id: 'tree',
            name: 'Tall Tree',
            filePath: "tree.jpg",
            medium: 'Oil on canvas',
        });

        let dog = new Piece({
            id: 'dog',
            name: 'Wiener Dog',
            filePath: "weinerdog.jpg",
            medium: 'Digital Image',
        });

        return [cat, fish, tree, dog];
    }
}
