import Service from '@ember/service';

class Piece {
    constructor({ id, name, medium, filePath, sellingPrints, dimensions }) {
        this.id = id;
        this.name = name;
        this.filePath = filePath;
        this.medium = medium;
        this.sellingPrints = sellingPrints;
        this.dimensions = dimensions;
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
                sellingPrints: true,
                dimensions: '8 x 11',
            }),
            new Piece({
                id: 'fish',
                name: 'Puffer Fish',
                filePath: "puffer.jpg",
                medium: 'Photograph, 35mm',
                sellingPrints: true,
                dimensions: '8 x 11',
            }),
            new Piece({
                id: 'tree',
                name: 'Tall Tree',
                filePath: "tree.jpg",
                medium: 'Oil on canvas',
                sellingPrints: true,
                dimensions: '12 x 12',
            }),
            new Piece({
                id: 'dog',
                name: 'Wiener Dog',
                filePath: "weinerdog.jpg",
                medium: 'Digital Image',
                sellingPrints: true,
                dimensions: '16 x 20',
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
