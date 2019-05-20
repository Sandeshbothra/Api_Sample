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
    model(param){
        let parentModel = this.modelFor('repositories.index');
        console.log(parentModel)
        let repository = null;
        parentModel.repos.forEach((repo) => {
            if(repo.name == param.repoName){
                repository = repo;
            }
        });
        console.log(repository);
        return this.ajax.request('repos/' + this.user.getUsername() + '/'+param.repoName + '/contents').then(function(response){
            return {"files" : response,"repository":repository};
        });
    }
});
