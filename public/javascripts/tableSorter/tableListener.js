var TableListener = {
  listenTo: function(headers) {
    TableListener.addEventListeners(headers);
  },

  addEventListeners: function(headers) {
    for (var header = 0; header < headers.length; header++) {
      TableListener.headerClick(headers[header],header);
    }
  },

  headerClick: function(header,headerIndex) {
    header.addEventListener("click", function(event) {
      TableSorter.sort(headerIndex)
    }, false);
  },
}