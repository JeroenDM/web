//(function() {
    var people = {
        people: ['Will', 'Laura'],
        init: function() {
            this.cacheDom();
            this.bindEvents();
            this.render();
        },
        cacheDom: function() {
            // DOM objects
            this.$el = $('#peopleModule');
            this.$button = this.$el.find('button');
            this.$input = this.$el.find('input');
            this.$ul = this.$el.find('ul');
            // strings containing html code
            this.template = this.$el.find('#people-template').html();
        },
        render: function() {
            var data = {
                people: this.people
            };
            this.$ul.html(Mustache.render(this.template, data));
        },
        bindEvents: function() {
            // inside addPerson 'this' will point to this.$button, the element
            // on which we are binding an event
            // you can change this by addPerson.bind(this)
            this.$button.on('click', this.addPerson.bind(this));
            this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
        },
        addPerson: function(value) {
            // if value is passed, use value, otherwise use input
            this.people.push(typeof(value) == "string" ? value : this.$input.val());
            this.render();
            this.$input.val('');
        },
        deletePerson(event) {
            var $remove = $(event.target).closest('li');
            var i = this.$ul.find('li').index($remove);
            
            this.people.splice(i,1);
            this.render();
        }
    }

    people.init();
//})();

//var people = [];
//var template = $('#people-template').html();
//
//$('#peopleModule').find('button').on('click', function(){
//    people.push($('#peopleModule').find('input').val());
//    $('#peopleModule').find('input').val('');
//    //data for mustache template
//    var data = {
//        people:people,
//    };
//    $('#peopleModule').find('ul').html(Mustache.render(template,data));
//});
//
//$('#peopleModule').find('ul').delegate('i.del','click', function(e){
//    var $remove = $(e.target).closest('li');
//    var i = $('#peopleModule').find('ul').find('li').index($remove);
//    $remove.remove();
//    people.splice(i,1);
//});
//
//myModule = {
//    name: 'Will',
//    age: 24,
//    sayName: function() {
//        alert(this.name);
//    },
//    setName: function(newName) {
//        this.name = newName;
//    }
//};
//
//myModule.sayName();