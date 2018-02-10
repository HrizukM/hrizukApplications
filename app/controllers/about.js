import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        toggleBody(){
            this.toggleProperty('isExpanded');
        }
    }
});
