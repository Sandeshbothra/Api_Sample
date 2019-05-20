import Service from '@ember/service';
import AjaxService from 'ember-ajax/services/ajax';
import { inject as service } from '@ember/service';
import { oneWay } from '@ember/object/computed';
import { computed } from '@ember/object';

export default AjaxService.extend({
    user : service(),
    userName : oneWay('user'), //NO I18N
    headers: computed('userName',function(){
        return {
             "Authorization" : "Basic " + btoa(this.user.getUsername() + ':' + this.user.getPassword()),
             "Content-Type" : "application/json",
             "Accept" : "application/json"
        }
    }),
    host: 'https://api.github.com'
});
