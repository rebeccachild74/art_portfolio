import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class PieceRoute extends Route {
@service pieceDetails;

    model(params) {
        // let pieces = this.store.findAll('pieceDetails');
        let pieces = this.pieceDetails.find( (piece) => piece.id === params.id);
        console.log(pieces);
        // console.log(pieces.find((piece) => piece.id === params.id));
        // return pieces.find((piece) => piece.id === params.id);
        return pieces;
    }
}
