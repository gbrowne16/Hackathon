

var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Economics/College%20Majors%20%26%20Incomes.csv"
var major = getColumn(url,2);
var majorCategory = getColumn(url,6);
var shareWomen = getColumn(url,7);
var medianIncome = getColumn(url,11)

//majorCategory.splice(0,0,"Choose major here")
document.getElementById("female").value="Enter number here";
document.getElementById("income").value="Enter number here";

var uniqueCategories = []
for (var i=0; i < majorCategory.length; i++){
if (!(uniqueCategories.includes(majorCategory[i])))
    uniqueCategories.push(majorCategory[i])

}


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

    for (var i=0; i < major.length; i++){
      
if ((inputMajor == majorCategory[i])&&(inputFemale/100<=parseFloat(shareWomen[i]))&&(inputIncome<=parseFloat(medianIncome[i]))){
goodMajors.push(" "+major[i])
}
}
if(goodMajors.length==0){goodMajors="No Results Found! Adjust your search and try again..." }


    return goodMajors
}

function displayMajor(){
    if(document.getElementById("female").value=="Enter number here"){document.getElementById("female").value=0};
    if(document.getElementById("income").value=="Enter number here"){document.getElementById("income").value=0};
    document.getElementById("output").innerHTML = getMajor(document.getElementById("category").value, document.getElementById("female").value, document.getElementById("income").value);
        document.getElementById("female").value="Enter number here";
    document.getElementById("income").value="Enter number here";
    }



