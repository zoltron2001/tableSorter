var Quicksort = {

  sort: function(rows,columnIndex) {
    var length = rows.length;
    if ( length <= 1 ) { return rows }
    return Quicksort.quicksort(rows,columnIndex)
  },

  quicksort: function(rows,columnIndex) {
    var partition   = Quicksort.partition(rows,columnIndex);
    // recurse
    partition.left  = Quicksort.sort(partition.left,columnIndex);
    partition.right = Quicksort.sort(partition.right,columnIndex); //
    return Quicksort.reconstructArray(partition);
  },

  partition: function(rows,columnIndex) {
    var pivotRow = rows[ Quicksort.randomInteger(rows.length) ],
        pivot    = Quicksort.getRowValue(pivotRow,columnIndex),
        left     = [],
        middle   = [],
        right    = [];
    // Incase string contains an integer
    if  (parseInt(pivot)) {pivot = parseInt(pivot)} //
    for (var i = 0; i < rows.length; i++) {
      var rowValue = Quicksort.getRowValue(rows[i],columnIndex);
      // Incase string contains an integer
      if ( parseInt(rowValue) ) { rowValue = parseInt(rowValue) } //
      if      ( rowValue <  pivot  ) {   left.push(rows[i]) }
      else if ( rowValue == pivot  ) { middle.push(rows[i]) }
      else if ( rowValue >  pivot  ) {  right.push(rows[i]) }
    }

    return {left: left, middle: middle, right: right}
  },

  getRowValue: function(row,columnIndex) {
    return row.children[columnIndex].innerHTML
  },

  reconstructArray: function(partition) {
    var left   = partition.left,
        middle = partition.middle,
        right  = partition.right;
    return left.concat(middle).concat(right);
  },

  randomInteger: function(rowsLength) {
    return Math.floor( Math.random() * (rowsLength) )
  },

}