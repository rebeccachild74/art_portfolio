import Service from '@ember/service';

class Piece {
    constructor({ id, name, medium, filePath }) {
        this.id = id;
        this.name = name;
        this.filePath = filePath;
        this.medium = medium;
    }
}

export default class PieceDetailsService extends Service {
    storage = {};

    constructor() {
        super(...arguments);
        this.storage.pieces = [
            new Piece({
                id: 'cat',
                name: 'Funny Cat',
                filePath: "cat1.jpg",
                medium: 'Photograph, 35mm',
            }),
            new Piece({
                id: 'fish',
                name: 'Puffer Fish',
                filePath: "puffer.jpg",
                medium: 'Photograph, 35mm',
            }),
            new Piece({
                id: 'tree',
                name: 'Tall Tree',
                filePath: "tree.jpg",
                medium: 'Oil on canvas',
            }),
            new Piece({
                id: 'dog',
                name: 'Wiener Dog',
                filePath: "weinerdog.jpg",
                medium: 'Digital Image',
            })
        ];
    }

    get pieces() {
        return this.storage.pieces;
    }

    find(filterFn) {
        return this.pieces.find(filterFn);
    }

    findAll() {
        return this.pieces;
    }
}
