var names = ['Andrew', 'Julie', 'Jen'];

names.forEach(function(name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach(name => console.log(name));

var returnMe = name => name + '!';
console.log(returnMe('Kcrossfitter'));

var person = {
  name: "Andrew",
  greet: function() {
    names.forEach(function(name) {
      console.log(this.name + ' says hello to ' + name);
    })
  }
}

person.greet();

var personArrow = {
  name: "Andrew",
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + ' says hello to ' + name);
    })
  }
}

personArrow.greet();

// challenge

function add(a, b) {
  return a + b;
}

addStatement = (a, b) => {
  return a + b;
}

addExpression = (a, b) => a + b;

console.log(addStatement(3, 9));
console.log(addExpression(30, 90));
