var Person = function(firstAndLast) {

  var names = firstAndLast.split(' ');
  
  this.getFirstName = function() {
    return names[0];
  };
  
  this.getLastName = function() {
    return names[1];
  };
    
  this.getFullName = function() {
    return names[0] + ' ' + names[1];
  };
  
  this.setFirstName = function(first) {
    names[0] = first;
  };
  
  this.setLastName = function(last) {
    names[1] = last;
  };
  
  this.setFullName = function(firstAndLast) {
    names = firstAndLast.split(' ');
  };

};