import Component from '@ember/component';

export default Component.extend({
    classNames:['test'],
    isClicked:false,
    actions:{
        showMenu: function(){
            this.toggleProperty('isClicked');
        }
    }
});
