/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler() {

  this.getNum = function(input) {
    var result;
    return parseFloat(input) ? parseFloat(input) : 1
    return result;
  };

  this.getUnit = function(input) {
    var result;
    var a =  parseFloat(input)
    result = input.replace(a,'');

    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var result;
    if (initUnit == "gal") {
      return "L"
    } else if (initUnit == "L") {
      return "gal"
    }
    else if (initUnit == "lbs") {
      return "kg"

    }
    else if (initUnit == "kg") {
      return "lbs"

    }
    else if (initUnit == "mi") {
      return "km"

    }
    else if (initUnit == "km") {
      return "mi"

    }
    else {
   return "invalid unit"

    }
  };

  this.spellOutUnit = function(unit) {
    var result;
    var units = [];
    units["L"] = "liters";
    units["gal"] = "gallons"
    units["lbs"] = "pounds"
    units["kg"] = "kilogram"
    units["mi"] = "miles"
    units["km"] = "kilometers"
    return units[unit];
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if (initUnit == "gal") {
      return initNum * galToL
    }
    else if (initUnit == "L") {
      return initNum / galToL
    }
    else if (initUnit == "lbs") {
      return initNum * lbsToKg

    }
    else if (initUnit == "kg") {
      return initNum / lbsToKg

    }
    else if (initUnit == "mi") {
      return initNum * miToKm

    }
    else if (initUnit == "km") {
      return initNum /  miToKm

    }
    else {
      return "invalid unit"
    }
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
  result =   `${initNum} ${this.spellOutUnit(initUnit)} converts to ${Number.parseFloat(returnNum).toFixed(5)} ${this.spellOutUnit(returnUnit)}`

    return result;
  };

}

module.exports = ConvertHandler;
