import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ArtworkRoute extends Route {
    @service pieceDetails;


    model() {
        let pieces = this.pieceDetails.findAll();
        return pieces;
    }
}
