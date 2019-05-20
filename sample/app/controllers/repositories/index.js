import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        openRepositories(repoName){
            this.transitionToRoute('repositories.repository',repoName);
        }
    }
});
