function myReplace(str, before, after) {
  const isCapitalized = before[0] === before[0].toUpperCase();
  
  after = isCapitalized
    ? after.charAt(0).toUpperCase() + after.slice(1)
    : after.charAt(0).toLowerCase() + after.slice(1);

  return str.replace(new RegExp(before, 'g'), after);
}