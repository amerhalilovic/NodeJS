var events = require('events');
var util = require('util');

var Person = function (name) {
    this.name = name;

};

util.inherits(Person, events.EventEmitter);

var James = new Person('James');
var Marry = new Person('Marry');
var Ryan = new Person('Ryan');

var people = [James, Marry, Ryan];

people.forEach(function (person) {
    person.on('speak', function (mssg) {
        console.log(person.name + ' said : ' + mssg);
    });
});

James.emit('speak','hey dudes');
Ryan.emit('speak',' I want a curry');