function BMI (weight ,height){
let result=weight / (height * height);
return result

}
console.log(BMI(10,10))

function Status(bmi){
if(bmi<18.5){
 return "لديك نقص في الوزن"   
}

if(25>bmi>=18.5){
 return "وزنك صحي"   
}

if(bmi>=25){
 return "لديك زيادة في الوزن"   
}
}

function calculate(){

    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value 
    let bmi=BMI(weight ,height)
    let desc=Status(bmi) 
    let div=document.getElementById('result') 
    div.innerText=bmi + " == " + desc 
}