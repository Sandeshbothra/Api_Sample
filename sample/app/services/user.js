import Service from '@ember/service';

export default Service.extend({
    userName : null,
    password : null,

    setUsername(name){
        this.set('userName',name);
    },

    setPassword(password){
        this.set('password',password);
    },

    isAuthenticated(isAuthenticated){
        this.set('isAuthenticated',isAuthenticated);
    },

    getUsername(){
        return this.userName;
    },

    getPassword(){
        return this.password;
    },
});
