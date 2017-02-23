var TableSorter = {

  sort: function(columnIndex) {
    var rows = TableSorter.getRows();
    return Quicksort.sort(rows,columnIndex)
  },

  getRows: function() {
    return $('tbody tr')
  }

}