import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    user: service(),
    ajax : service(),
    beforeModel(){
        if(!this.user.getUsername()){
            this.transitionTo('/');
        }
    },
    model(){
        return this.ajax.request('users/' + this.user.getUsername() + '/repos').then(function(response){
            return {"repos" : response};
        });
    }
});
