var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

function originalPercentage(employee){ //caculates initial bonus percent
  if(employee[3] == 2){
    return 0;
  } else if(employee[3] == 3){
   return .04;
  } else if(employee[3] == 4) {
   return .06;
  } else if(employee[3] == 5) {
   return .1;
 } else {
   return 0;
 }
}
console.log("hello");
 function bonusCalc(employee) { //salary with bonus included
    var bonusPercentage = [];
    if(employee[3] == 2){
      bonusPercentage = originalPercentage(employee);
    } else if(employee[3] == 3){
     bonusPercentage = employee[2] * originalPercentage(employee);
    } else if(employee[3] == 4) {
     bonusPercentage = employee[2] * originalPercentage(employee);
    } else if(employee[3] == 5) {
     bonusPercentage = employee[2] * originalPercentage(employee);
    }
    return bonusPercentage;
  }

function longevity(employee, bonusPer) { //adjustment based on longevity
  bonusPercentage = parseInt(bonusPer);
  //console.log(typeof(bonusPercentage));
  //console.log(bonusPer);
  if (employee[1].length < 5) {
  var salary = parseInt(employee[2]);
  //console.log("salary = " + salary);
  // 1880 + (47000 * 0.05)
    bonusPercentage = bonusPercentage + (salary * .05);
    //console.log("bonusPercentage = " + bonusPercentage);
    return bonusPercentage;
  } else {
    //console.log("i am the else" + bonusPercentage);
    return bonusPercentage;
  }
}

function longevityPercent (employee){ //calculate change to bonus % for longevity
  var percentage = originalPercentage(employee);
  if(employee[1].length < 5) {
    percentage += 0.05;
  } return percentage;
}


function salaryAdjust(employee) { //reduces percen base on income over 65,000
  var temp = originalPercentage(employee)
  if(parseInt(employee[2]) > 65000) {
    //console.log("i am in the If");
   temp -= .01;
     return temp;
  }
return temp;
}

function withinLimits (employee) {
  var totalPercentage = longevityPercent(employee);
  return totalPercentage;
  //console.log(totalPercentage);
}
//withinLimits(atticus);
console.log(withinLimits(atticus));
//console.log(salaryAdjust(atticus));
//console.log("salary percent adjust " + salaryAdjust(scout));
// console.log(newArray(atticus));
// console.log(bonusCalc(atticus));
// console.log(longevity(atticus, bonusCalc(atticus)));
//console.log(salaryAdjust(scout, bonusCalc(scout)));


function newArray(employee) {
    var logic = [];
    var employeesName = employee[0];
    var bonusPercentage = withinLimits(employee);
    var aac = (withinLimits(employee) * parseInt(employee[2]))+parseInt(employee[2]);
    var totalBonus = Math.ceil(aac);
    logic = [employeesName, bonusPercentage, aac, totalBonus];
    return logic;
}


employees.forEach(function(employee){
  console.log(newArray(employee));
});

// console.log(newArray(jem));
// var newAtticus = [newArray(atticus), newArray(jem)];
//
// for(var i = 0; i < employees.length; i++) {
//   employees[0];
//   employees[0]++
//
//   console.log(newArray(employee[i]));
//   employees[i]++
//   }
//
// console.log(employees[0]);
