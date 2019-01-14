      google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Total', 80]
        ]);
        var data2 = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['SGIA-ap50', 80],
          ['SGIA-ap90', 80],
          ['EBAS-ap50', 80],
          ['EBAS-ap90', 80]
        ]);

         var options = {
          width: 1000, height: 300,
          yellowFrom:35, yellowTo: 50,
          minorTicks: 5,
          greenFrom:50,greenTo:100,
          greenColor:'#239B56'
        };
        var options2 = {
          width: 600, height: 160,
          yellowFrom:35, yellowTo: 50,
          minorTicks: 5,
          greenFrom:50,greenTo:100,
          greenColor:'#239B56'
        };
        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
        var s, charts = document.getElementsByClassName("gauge");
        for (s of charts) {
          var gaugeChart =  new google.visualization.Gauge(s);
          var data3 = google.visualization.arrayToDataTable([
                ['Label', 'Value'],
                ['Project', 80]
            ]);
            var project = s.getAttribute("project")

            data3.setValue(0, 0, project);
            gaugeChart.draw(data3,options2)
        }

        chart.draw(data, options);



                setInterval(function() {
                  chart.draw(data, options);
                  fetch('/coverage/simgrid')
                    .then(response => response.json())
                    .then(cov => data.setValue(0, 1, cov));
                     }, 13000);
        setInterval(function() {
          data2.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          data2.setValue(1, 1, 40 + Math.round(60 * Math.random()));
          chart2.draw(data2, options2);
        }, 5000);
      }