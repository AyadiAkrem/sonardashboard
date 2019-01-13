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
        var data3 = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['GMIA-ap50', 80],
          ['GMIA-ap90', 80],
          ['CTIA-ap50', 80],
          ['CTIA-ap90', 80]
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
        var chart2 = new google.visualization.Gauge(document.getElementById('chart_div2'));
        var chart3 = new google.visualization.Gauge(document.getElementsByClassName("gauge")[0]);

        chart.draw(data, options);
        chart2.draw(data2,options2);
        chart3.draw(data3,options2);

        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 5000);
        setInterval(function() {
          data2.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          data2.setValue(1, 1, 40 + Math.round(60 * Math.random()));
          chart2.draw(data2, options2);
        }, 5000);
      }