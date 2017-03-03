// Where art thou 
// Make a function that looks through an array of objects (first argument)
// and returns an array of all objects that have matching property and value pairs
// (second argument). Each property and value pair of the source object has to
// be present in the object from the collection if it is to be returned.

function where(collection, source) {
  return collection.filter(function (obj) {
    for (var prop in source) {
      if (!obj.hasOwnProperty(prop) || obj[prop] !== source[prop])
        return false;
    }
    return true;
  });
}

where(
  [{ first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }
  ], { last: "Capulet" });
