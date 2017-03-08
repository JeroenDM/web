var events = {
  events: {},
  on: function (eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  off: function(eventName, fn) {
    if (this.events[eventName]) {
      for (var i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      };
    }
  },
  emit: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function(fn) {
        fn(data);
      });
    }
  }
};

var people = (function() {
    var people = ['Will', 'Laura'];
    
    // chacke DOM objects
    $el = $('#peopleModule');
    $button = $el.find('button');
    $input = $el.find('input');
    $ul = $el.find('ul');
    
    // get template strings from dom
    template = $el.find('#people-template').html();
    
    // bind events
    $button.on('click', addPerson.bind(this));
    $ul.delegate('i.del', 'click', deletePerson.bind(this));
    
    // initialize
    _render();
    
    // define functions
    function _render() {
        var data = {
            people: people
        };
        $ul.html(Mustache.render(template, data));
    }
    
    function bindEvents() {
        // inside addPerson 'this' will point to $button, the element
        // on which we are binding an event
        // you can change this by addPerson.bind(this)
        $button.on('click', addPerson.bind(this));
        $ul.delegate('i.del', 'click', deletePerson.bind(this));
    }
    
    function addPerson(value) {
        // if value is passed, use value, otherwise use input
        var name = typeof(value) == "string" ? value : $input.val();
        
        people.push(name);
        _render();
        $input.val('');
    }
    
    function deletePerson(event) {
        var $remove = $(event.target).closest('li');
        
        if (typeof(event) == "number") {
            var i = event;
        } else {
            var i = $ul.find('li').index($remove);
        } 

        people.splice(i,1);
        _render();
    }
    
    // reveal api
    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    }
})();