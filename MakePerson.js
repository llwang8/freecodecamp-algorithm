/*Make a Person
Fill in the object constructor with the methods specified in the tests.
Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first),
setLastName(last), and setFullName(firstAndLast).
All functions that take an argument have an arity of 1, and the argument will be a
string.
These methods must be the only available means for interacting with the object.
*/

var Person = function(firstAndLast) {
  var firstName = firstAndLast.split(" ")[0];
  var lastName = firstAndLast.split(" ")[1];
  var fullName = firstName + " " + lastName;

  this.getFirstName = function(){
    return firstName;
  };
  this.getLastName = function(){
    return lastName;
  };
  this.getFullName = function(){
    return fullName;
  };
  this.setFirstName = function(firstNameStr){
    firstName = firstNameStr;
    fullName = firstName + " " + lastName;
  };
  this.setLastName = function(lastNameStr){
    lastName = lastNameStr;
    fullName = firstName + " " + lastName;
  };
  this.setFullName = function(fullNameStr){
    firstName = fullNameStr.split(" ")[0];
    lastName = fullNameStr.split(" ")[1];
    fullName = firstName + " " + lastName;
    //fullName = fullNameStr;
    return fullName;
  };
};
var bob = new Person('Bob Ross');
bob.setFirstName("Haskell");
bob.getFullName();
