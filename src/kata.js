function Converter(){

  return {
    kilometersToMiles : function(kilometers){
      var result = kilometers * 0.621371;
      return new Number(result.toFixed(6));
    },
    
    celsiusToFahrenheit : function(celsius){
      var result = celsius * 1.8 + 32;
      return new Number(result.toFixed(2));
    },

    kilogramsToPounds: function(kilograms){
      var result = kilograms / 0.45359237;
      return new Number(result.toFixed(8));
    },

    litersToGallons: function(liters, units){
      if(units == "US"){
        var result = liters / 3.785411784;
        return new Number(result.toFixed(9))
      }

      var result = liters / 4.54609;
      return new Number(result.toFixed(9));
    }
  };
}
