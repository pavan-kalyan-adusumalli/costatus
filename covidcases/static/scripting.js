const request = new XMLHttpRequest();
request.open('GET', 'https://api.covid19api.com/summary');
request.send();
var countryandcases=[['Country', 'Cases']]

request.onload = ()=>{
    if(request.status === 200){
        var casesarr = JSON.parse(request.response);
        var countriesinfo = casesarr['Countries'];
        for(var i=0; i<countriesinfo.length; i++){
            //for(var i=0; i<10; i++){
            countryandcases.push([countriesinfo[i]['CountryCode'], countriesinfo[i]['TotalConfirmed']]);
        }
       countryandcases.push(['GL',6556]);
        
        
    google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});

google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    console.log(countryandcases);
    var data = google.visualization.arrayToDataTable(countryandcases);
    console.log(countryandcases);

    var options = {
        title: 'Covid19 cases around the world',
        colors: ['#FF0000'],
        backgroundColor: 'transparent'
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}  
        
        
        
        
        
        
    }
    else
        console.log(request.status)
}




