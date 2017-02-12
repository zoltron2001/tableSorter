describe("TableSorter", function() {

  describe("partition", function() {
    describe("return object", function() {
      var empty;
      beforeEach(function() {
        empty = TableSorter.partition([]);
      });
      it("has left attribute", function() {
        expect(empty.left).toBeDefined();
      });
      it("has middle attribute", function() {
        expect(empty.middle).toBeDefined();
      });
      it("has right attribute", function() {
        expect(empty.left).toBeDefined();
      });
    });
    describe("partitioning", function() {
      describe("middle",function() {
        var middled;
        beforeEach(function() {
          middled = TableSorter.partition([1,1,1]);
        });
        it("middle has elements", function() {
          expect(middled.middle).toEqual([1,1,1]);
        });
        it("left empty", function() {
          expect(middled.left).toEqual([]);
        });
        it("right empty", function() {
          expect(middled.right).toEqual([]);
        });
      });
      describe("left/right",function() {
        var left,right;
        beforeEach(function() {
          var lopsided  = [0,1];
          var partition = TableSorter.partition(lopsided);
          left          = partition.left;
          right         = partition.right;
        });
        it("at least one is empty", function() {
          leftEmpty  = left[0]  == undefined;
          rightEmpty = right[0] == undefined;
          expect( leftEmpty && rightEmpty ).not.toBeTruthy();
        });
        it("only one has element", function() {
          leftHasElement  = left.length  == 1
          rightHasElement = right.length == 1
          expect(leftHasElement && rightHasElement).toEqual(false);
        });
      });
    });

  });

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