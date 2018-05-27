function getOrdering(length) {
  var numbers = Array.apply(null, {length: length || 0}).map(Number.call, Number);

  return shuffleArray(numbers);
}

function shuffleArray(elements) {
  var result = elements.map(x => x);
  var temp = null;
  var j = null;

  for (var i = result.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }

  return result;
}
