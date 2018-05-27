function getOrdering(length) {
    var order = [];
    for (var i = 0; i < length; i++) {
        order.push(i);
    }
    shuffleArray(order);
    return order;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}