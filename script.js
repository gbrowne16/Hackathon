

var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Economics/College%20Majors%20%26%20Incomes.csv"
var major = getColumn(url,2);
var majorCategory = getColumn(url,6);
var shareWomenDecimal = getColumn(url,7);
var shareWomen=[]
var i=0
while(shareWomen.length<shareWomenDecimal.length){
     shareWomen.push(shareWomenDecimal[i]*100); var i=i+1;

}
console.log(shareWomen)
var medianIncome = getColumn(url,11)

document.getElementById("female").value="Enter number here";
document.getElementById("income").value="Enter number here";

function clearTextOne(){
    document.getElementById("female").value=""
}

function clearTextTwo(){
    document.getElementById("income").value=""
}

var uniqueCategories = []
for (var i=0; i < majorCategory.length; i++){
    if (!(uniqueCategories.includes(majorCategory[i])))
    uniqueCategories.push(majorCategory[i])

}
uniqueCategories.splice(0,0,"Choose major here")

//refers to dropdown
var categorySelect = document.getElementById("category");

for (var i=0; i < uniqueCategories.length; i++){
    var el = document.createElement("option")
      
el.innerHTML = uniqueCategories[i];
el.value = uniqueCategories[i];
categorySelect.appendChild(el);
}

//This function returns a list of majors that would be good for that person
function getMajor(inputMajor, inputFemale, inputIncome){
var goodMajors = []

    for (var i=0; i < major.length; i++){
      
if ((inputMajor == majorCategory[i])&&(inputFemale<=parseFloat(shareWomen[i]))&&(inputIncome<=parseFloat(medianIncome[i+1]))){
    goodMajors.push(" "+major[i])
}
}
if(goodMajors.length==0){
    goodMajors="No Results Found! Adjust your search and try again..." }

    return goodMajors
}
//this function displays the majors on the screen by running the getMajor function
//with the user inputs as parameters
function displayMajor(){
    if(document.getElementById("female").value=="Enter number here"){
        document.getElementById("female").value=0};
    if(document.getElementById("income").value=="Enter number here"){
        document.getElementById("income").value=0};
    document.getElementById("output").innerHTML = getMajor(document.getElementById("category").value, document.getElementById("female").value, document.getElementById("income").value);
    document.getElementById("female").value="Enter number here";
    document.getElementById("income").value="Enter number here";
    }

