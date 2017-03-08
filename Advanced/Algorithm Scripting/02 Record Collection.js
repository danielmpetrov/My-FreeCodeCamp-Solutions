// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  const record = collection[id];
  if (value === '') {
    delete record[prop];
  }
  else if (prop !== 'tracks' && value !== '') {
    record[prop] = value;
  }
  else if (prop === 'tracks') {
    if (record.hasOwnProperty(prop)) {
      record[prop].push(value);
    }
    else {
      record[prop] = [value];
    }
  }

  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
