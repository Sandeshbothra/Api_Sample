import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    ajax : service(),
	user : service(),
    actions:{
        login(){
            let self = this;
            let userName = $('input[name=username]').val();
            let password = $('input[name=password]').val();
            this.user.setUsername(userName);
            this.user.setPassword(password);
            this.ajax.request('/user').then(function(response){
                self.transitionToRoute('repositories');
            })
        }
    }
});
