$(document).ready(function(){
  getWeather();
})

function getWeather(searchQuery) {
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=metric&appid=a0877609d325ff8690cdcd7695c0879d"

  $.ajax(url,{success: function(data){
    $(".city").text(data.city);
    $(".temp").text(data.main.temp);
  }})
}

function searchWeather(){
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
}
