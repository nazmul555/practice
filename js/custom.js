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





$( function() {
    var availableTags = [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Cabo Verde",
      "Cambodia",
      "Cameroon",
      "Denmark",
      "Dominican Republic",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Fiji",
      "Finland",
      "France",
      "Gambia",
      "Georgia",
      "Germany",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Japan",
      "Jordan",
      "Kenya",
      "Kuwait",
      "Lebanon",
      "Liberia",
      "Libya",
      "Madagascar",
      "Malaysia",
      "Maldives",
      "Mali",
      "Nepal",
      "Netherlands",
      "New Zealand",
      "Oman",
      "Pakistan",
      "Palestine",
      "Panama",
      "Papua New Guinea",
      "Qatar",
      "Romania",
      "Russia",
      "Samoa",
      "Serbia",
      "Singapore",
      "South Africa",
      "South Korea",
      "Sri Lanka",
      "Sweden",
      "Switzerland",
      "Syria",
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      "Trinidad and Tobago",
      "Tunisia",
      "Turkey",
      "Uganda",
      "Ukraine",
      "United Arab Emirates (UAE)",
      "United Kingdom (UK)",
      "United States of America (USA)",
      "Uruguay",
      "Vatican City (Holy See)",
      "Venezuela",
      "Vietnam",
      "Yemen",
      "Zambia",
      "Zimbabwe"
    ];
    $( "#destination3" ).autocomplete({
      source: availableTags
    });
    $( "#exampleInputAmount" ).autocomplete({
      source: availableTags
    });
    $("#destination3").autocomplete("widget").addClass('fixed-height');
    $("#exampleInputAmount").autocomplete("widget").addClass('fixed-height');
    $("#destination3").autocomplete("widget").attr('style', 'max-height: 150px; overflow-y: auto; overflow-x: hidden;')
    $("#exampleInputAmount").autocomplete("widget").attr('style', 'max-height: 150px; overflow-y: auto; overflow-x: hidden;')
  });




/*
  $( function() {
      var availableTags = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Denmark",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Fiji",
        "Finland",
        "France",
        "Gambia",
        "Georgia",
        "Germany",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Japan",
        "Jordan",
        "Kenya",
        "Kuwait",
        "Lebanon",
        "Liberia",
        "Libya",
        "Madagascar",
        "Malaysia",
        "Maldives",
        "Mali",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Oman",
        "Pakistan",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Qatar",
        "Romania",
        "Russia",
        "Samoa",
        "Serbia",
        "Singapore",
        "South Africa",
        "South Korea",
        "Sri Lanka",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (UAE)",
        "United Kingdom (UK)",
        "United States of America (USA)",
        "Uruguay",
        "Vatican City (Holy See)",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe"
      ];
      $( "#exampleInputAmount" ).autocomplete({
        source: availableTags
      });
    } );
    */
