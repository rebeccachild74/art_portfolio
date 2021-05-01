import Route from '@ember/routing/route';

export default class ArtworkPieceRoute extends Route {
    model(params) {
        let pieces = this.modelFor('artwork');
        return pieces.find((piece) => piece.id === params.id);
    }
}
