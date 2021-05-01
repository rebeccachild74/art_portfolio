import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class PieceRoute extends Route {
@service pieceDetails;

    model(params) {
        let selectedPiece = this.pieceDetails.find( (piece) => piece.id === params.id);
        console.log(selectedPiece);
        return selectedPiece;
    }
}
