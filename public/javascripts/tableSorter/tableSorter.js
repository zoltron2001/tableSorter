var TableSorter = {

  sort: function(array) {
    var length = array.length;
    if ( length <= 1 ) { return array }
    return TableSorter.quicksort(array)
  },

  quicksort: function(array) {
    var partition = TableSorter.partition(array);
    return TableSorter.reconstructArray(partition);
  },

  partition: function(array) {
    var pivot  = array[ TableSorter.randomInteger(length) ],
        left   = [],
        middle = [],
        right  = [];
    for (var i = 0; i < length; i++) {
      if      ( array[i] <  pivot ) {   left.push(array[i]) }
      else if ( array[i] == pivot ) { middle.push(array[i]) }
      else if ( array[i] >  pivot ) {  right.push(array[i]) }
    }
    // recurse
    left  = TableSorter.sort(left);
    right = TableSorter.sort(right);
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