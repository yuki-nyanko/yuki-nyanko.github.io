jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // Java Chart
  var doughnutData = [{
      value: 60,
      color: "#1abc9c"
    },
    {
      value: 40,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("java").getContext("2d")).Doughnut(doughnutData);

  // JavaScript Chart
  var doughnutData = [{
    value: 30,
    color: "#1abc9c"
  },
  {
    value: 70,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

  // Oracle Chart
  var doughnutData = [{
    value: 50,
    color: "#1abc9c"
  },
  {
    value: 50,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("oracle").getContext("2d")).Doughnut(doughnutData);

  // HTML Chart
  var doughnutData = [{
    value: 20,
    color: "#1abc9c"
  },
  {
    value: 80,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

  // FinalCutProX Chart
  var doughnutData = [{
    value: 60,
    color: "#1abc9c"
  },
  {
    value: 40,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("finalcut").getContext("2d")).Doughnut(doughnutData);

  var doughnutData = [{
    // Premiere Chart
    value: 30,
    color: "#1abc9c"
  },
  {
    value: 70,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("premiere").getContext("2d")).Doughnut(doughnutData);
});
