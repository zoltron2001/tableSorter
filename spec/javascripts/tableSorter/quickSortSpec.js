describe("Quicksort", function() {

  var rows,row,getCell;

  beforeEach(function() {
    loadFixtures('table.html');
    rows = $('tBody tr');
    row  = rows[0];
    getCell = function(rows,rowIndex,columnIndex) {
      return rows[rowIndex].children[columnIndex].innerHTML
    }
  });

  describe("sort", function() {
    describe("sorts", function() {
      it("integers", function() {
        var sorted    = Quicksort.sort(rows,2),
            firstRow  = getCell(sorted,0,2),
            secondRow = getCell(sorted,1,2),
            thirdRow  = getCell(sorted,2,2);
        expect(firstRow).toEqual('5');
        expect(secondRow).toEqual('15');
        expect(thirdRow).toEqual('23');
      });
      it("words", function() {
        var sorted    = Quicksort.sort(rows,0),
            firstRow  = getCell(sorted,0,0),
            secondRow = getCell(sorted,1,0),
            thirdRow  = getCell(sorted,2,0);
        expect(firstRow).toEqual('Amir');
        expect(secondRow).toEqual('Julius');
        expect(thirdRow).toEqual('Michael');
      });
    });
  });

  describe("partition", function() {
    describe("return object", function() {
      var partition;
      beforeEach(function() {
        partition = Quicksort.partition(rows,0);
      });
      it("has left attribute", function() {
        expect(partition.left).toBeDefined();
      });
      it("has middle attribute", function() {
        expect(partition.middle).toBeDefined();
      });
      it("has right attribute", function() {
        expect(partition.left).toBeDefined();
      });
    });

    describe("partitioning", function() {
      describe("middle",function() {
        var middled;
        beforeEach(function() {
          for (var row = 0; row < rows.length; row++) {
            rows[row].children[0].innerHTML = 1;
          }
          middled = Quicksort.partition(rows,0);
        });
        it("middle has elements", function() {
          expect(middled.middle.length).toEqual(3);
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
          // reduce to two rows since partition point is random
          delete rows[2]
          rows.length   = 2; //
          var partition = Quicksort.partition(rows,0);
          left          = partition.left;
          right         = partition.right;
        });
        it("at least one is empty", function() {
          var leftEmpty  = left[0]  == undefined,
              rightEmpty = right[0] == undefined;
          expect( leftEmpty && rightEmpty ).not.toBeTruthy();
        });
        it("only one has element", function() {
          var leftHasElement  = left.length  == 1,
              rightHasElement = right.length == 1;
          expect(leftHasElement && rightHasElement).toEqual(false);
        });
        it("sorts alphabetically", function() {
          var leftIsJulius, rightIsMichael;
          if ( left[0] != undefined ) {
            var leftValue = getCell(left,0,0);
            leftIsJulius  = leftValue == "Julius"
          }
          if (right[0] != undefined ) {
            var rightValue = getCell(right,0,0);
            rightIsMichael = rightValue == "Michael"
          }
          expect(leftIsJulius || rightIsMichael).toBeTruthy();
        });
      });
    });

  });

  describe("reconstructArray", function() {
    it("returns expected", function() {
      var partition = {left: [1], middle: [2], right: [3]},
          array     = Quicksort.reconstructArray(partition);
      expect(array).toEqual([1,2,3]);
    });
  });

  describe('getRowValue', function() {
    it('returns expected value',function() {
      var value = Quicksort.getRowValue(row,0);
      expect(value).toEqual('Julius');
    });
  });

  describe("randomInteger", function() {
    var returnValues;
    beforeEach(function() {
      returnValues = [];
      for (cycles = 0; cycles < 8; cycles++) {
        returnValues.push(Quicksort.randomInteger(2));
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