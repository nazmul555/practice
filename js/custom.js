$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

    $('#manualinputlabel').click(function(e) {
              $('.popover-title').append('<button id="popovercloseid" type="button" class="close">&times;</button>');
              $(this).popover();

      });

      $(document).click(function(e) {
         if(e.target.id=="popovercloseid" )
         {
              $('#manualinputlabel').popover('hide');
         }

      });





/*
      $(document).ready(function() {
          var date = new Date();

          var day = date.getDate();
          var month = date.getMonth() + 1;
          var year = date.getFullYear();

          if (month < 10) month = "0" + month;
          if (day < 10) day = "0" + day;

          var today = year + "-" + month + "-" + day;
          $("#exampleInputAmount2").attr("value", today);
      });
*/

/*
      $('#calendar').calendar();

      var events = [

    {start: '2017-04-01', end: '2017-04-07', summary: "Event #1", mask: true},

    {start: '2017-04-21', end: '2017-04-28', summary: "Event #2", mask: true},

    ...

];

$('#calendar').calendar({

  events: events

});
*/


/*
$(document).ready(function() {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    $("#exampleInputAmount2").attr("value", today);
});




$(document).ready(function() {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    $("#date3").attr("value", today);
});
*/
