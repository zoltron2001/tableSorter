var Quicksort = {

  on: function(array) {
    return Quicksort.partition(array)
  },

  partition: function(array) {
    var length = array.length;
    if ( length <= 1 ) { return array }
    var pivot  = array[ Quicksort.randomInteger(length) ],
        left   = [],
        middle = [],
        right  = [];
    for (var i = 0; i < length; i++) {
      if      ( array[i] <  pivot ) {   left.push(array[i]) }
      else if ( array[i] == pivot ) { middle.push(array[i]) }
      else if ( array[i] >  pivot ) {  right.push(array[i]) }
    }
    left  = Quicksort.partition(left);
    right = Quicksort.partition(right);
    return left.concat(middle).concat(right);
  },

  randomInteger: function(arrayLength) {
    return Math.floor( Math.random() * (arrayLength) )
  },

}