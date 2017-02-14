var Quicksort = {

  sort: function(array) {
    var length = array.length;
    if ( length <= 1 ) { return array }
    return Quicksort.quicksort(array)
  },

  quicksort: function(array) {
    var partition   = Quicksort.partition(array);
    // recurse
    partition.left  = Quicksort.sort(partition.left);
    partition.right = Quicksort.sort(partition.right); //
    return Quicksort.reconstructArray(partition);
  },

  partition: function(array) {
    var pivot  = array[ Quicksort.randomInteger(array.length) ],
        left   = [],
        middle = [],
        right  = [];
    for (var i = 0; i < array.length; i++) {
      if      ( array[i] <  pivot ) {   left.push(array[i]) }
      else if ( array[i] == pivot ) { middle.push(array[i]) }
      else if ( array[i] >  pivot ) {  right.push(array[i]) }
    }
    return {left: left, middle: middle, right: right}
  },

  reconstructArray: function(partition) {
    var left   = partition.left,
        middle = partition.middle,
        right  = partition.right;
    return left.concat(middle).concat(right);
  },

  randomInteger: function(arrayLength) {
    return Math.floor( Math.random() * (arrayLength) )
  },

}