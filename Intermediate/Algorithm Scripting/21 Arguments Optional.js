function addTogether(a, b) {
  if (!Number.isFinite(a)) {
    return;
  }

  if (b === undefined) {
    return function (n) {
      if (!Number.isFinite(n)) {
        return;
      }
      return a + n;
    };
  }
  else {
    if (!Number.isFinite(b)) {
      return;
    }
    return a + b;
  }
}

addTogether(2, 3);
