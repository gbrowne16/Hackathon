

var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Economics/College%20Majors%20%26%20Incomes.csv"
var major = getColumn(url,2);
var majorCategory = getColumn(url,6);
var shareWomen = getColumn(url,7);
var medianIncome = getColumn(url,11)


var uniqueCategories = []
for (var i=0; i < majorCategory.length; i++){
if (!(uniqueCategories.includes(majorCategory[i])))
    uniqueCategories.push(majorCategory[i])
}
console.log(uniqueCategories)

//refers to dropdown
var categorySelect = document.getElementById("category");
//loops through all unique categories
for (var i=0; i < uniqueCategories.length; i++){
    //create new option element

    var el = document.createElement("option")
      
//set html to be name from list
el.innerHTML = uniqueCategories[i];

el.value = uniqueCategories[i];

//attach options to the dropdown
categorySelect.appendChild(el);


}

function getMajor(inputMajor, inputFemale, inputIncome){
var goodMajors = []
    for (var i=0; i < majorCategory.length; i++){
if ((inputMajor == majorCategory[i])&&((inputFemale/100)<=parseFloat(shareWomen[i]))&&(inputIncome<=parseFloat(medianIncome[i]))){
goodMajors.push(major[i])
}
}
return goodMajors
}

function displayMajor(){
     
    document.getElementById("output").innerHTML = getMajor(document.getElementById("category").value, document.getElementById("female").value, document.getElementById("income").value);
    }




