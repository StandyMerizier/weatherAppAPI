$('#button').on('click', function(){
  var apiKEY = "78dd71b81ea22469c40e27e4ee530cd7";
  var city = $('#city').val()
  var country = $('#country').val()
  var apiURL = "http://api.openweathermap.org/data/2.5/weather?q="+ city +"," + country +"&appID="+ apiKEY;
  var apiURL2 = "https://chroniclingamerica.loc.gov/suggest/titles/?q=" + city;
  var weatherPic = ['img/cloud.png']
  $('li').remove()


  $.ajax({
    url: apiURL,
    //this is what's gonna happen if the request is a success
    success: function(res){
      //setting the var of temp as main temp which are the properties
      var temp = res.main.temp
      var weather = res.weather[0].main
      console.log(weather)
      //converts the temp from kelvin to fahrenheit
      var tempConverter = Math.ceil((( temp - 273.15) * 9/5) + 32)
      //print the current temperature in the html
      $('.print').html("The current weather in " +city+ ', ' + country + " is " +tempConverter);
      // $('#day').html(typeOfDay)
      switch (weather){
        case "Clouds":
        $('#typeOfDay').attr('src', weatherPic[0]);
        break;
        case "Haze":// Fog weather
        case "Mist":// Foggy Weather
        $('#typeOfDay').attr('src', weatherPic[0]);
        break;
        case "":// Foggy Weather
        $('#typeOfDay').attr('src', weatherPic[0]);
        break;
        case "Rain":// Sunny Weather
        $('#typeOfDay').attr('src', weatherPic[0]);
        break;
        default: // Clear weather
        $('#typeOfDay').attr('src', weatherPic[0])
      }
    },
    error: function(e) {
      console.log(e)
    }
  })
  $.ajax({
    url: apiURL2 ,
    success: function(response){
      console.log(response)
      response[1].forEach(function(el){
        $('ul').append("<li> " + el + ' <a href="'+response[3][0]+'">'+response[3][0]+' </a> </li>' )
      })
    },
    error: function(err){
      console.log(err)
    }
  })

});
