    dynamiclocation();

function dynamiclocation(){
//?key=Zr3sobEq29J6fLW

    fetch('https://ipapi.co/json/')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
        

        if (document.querySelector(".location-country-code")) {
    document.querySelector('.location-country-code').innerHTML = data.country_code;
}
      
        if (document.querySelector(".location-country")) {
 document.querySelector('.location-country').innerHTML = data.country_name;
}
        
      if (document.querySelector(".location-city")) {
 document.querySelector('.location-city').innerHTML = data.city;
}
        
        
                      if (document.querySelector(".location-state-code")) {
 document.querySelector('.location-state-code').innerHTML = data.region_code;
}
              if (document.querySelector(".location-state")) {
 document.querySelector('.location-state').innerHTML = data.region;
}
        
        
//        
//     document.querySelectorAll('.location-country-code').innerHTML = data.country_code;
//      document.querySelector('.location-country').innerHTML = data.country_name;
//
//        document.querySelector('.location-city').innerHTML = data.city;
//document.querySelector('.location-state').innerHTML = data.region;
//document.querySelector('.location-state-code').innerHTML = data.region; 

  });


}