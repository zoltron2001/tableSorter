describe("TableSorter", function() {

  var array, sortedArray;

  beforeEach(function() {
    array       = [7,0,5,2,1,5,3,8,4,-2];
    sortedArray = [-2,0,1,2,3,4,5,5,7,8];
  });

  describe("sort", function() {

    it("", function() {
    });

  });

  // sort: function(array) {
  //   var length = array.length;
  //   if ( length <= 1 ) { return array }
  //   return TableSorter.quicksort(array)
  // },

  describe("quicksort", function() {

    it("", function() {
    });

  });

  // quicksort: function(array) {
  //   var partition = TableSorter.partition(array);
  //   return TableSorter.reconstructArray(partition);
  // },

  describe("partition", function() {

    it("", function() {
    });

  });

  // partition: function(array) {
  //   var pivot  = array[ TableSorter.randomInteger(length) ],
  //       left   = [],
  //       middle = [],
  //       right  = [];
  //   for (var i = 0; i < length; i++) {
  //     if      ( array[i] <  pivot ) {   left.push(array[i]) }
  //     else if ( array[i] == pivot ) { middle.push(array[i]) }
  //     else if ( array[i] >  pivot ) {  right.push(array[i]) }
  //   }
  //   // recurse
  //   left  = TableSorter.sort(left);
  //   right = TableSorter.sort(right);
  //   return {left: left, middle: middle, right: right}
  // },

  describe("reconstructArray", function() {
    it("returns expected", function() {
      var partition = {left: [1], middle: [2], right: [3]};
      var array     = TableSorter.reconstructArray(partition);
      expect(array).toEqual([1,2,3]);
    });
  });

  describe("randomInteger", function() {
    var returnValues;
    beforeEach(function() {
      returnValues = [];
      for (cycles = 0; cycles < 8; cycles++) {
        returnValues.push(TableSorter.randomInteger(2));
      }
    });
    it("does not include cieling", function() {
      expect(returnValues).not.toContain(2);
    });
    it("includes 0", function() {
      expect(returnValues).toContain(0);
    });
  });

});