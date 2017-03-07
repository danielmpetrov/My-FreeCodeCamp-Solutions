function spinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .split(/[ _]/g)
    .join('-')
    .toLowerCase();
}

spinalCase('This Is Spinal Tap');
