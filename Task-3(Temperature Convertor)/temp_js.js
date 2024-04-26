let celcius_input=document.querySelector('#celcius > input ')
let faranite_input=document.querySelector('#faranite > input ')
let kelvin_input=document.querySelector('#kelvin > input ')
let reset=document.querySelector('.button button ')

function round_number(number){
    return Math.round(number*100)/100
}

celcius_input.addEventListener('input',function(){
    let celtemp=parseFloat(celcius_input.value)
    let fartemp=(celtemp*(9/5))+32
    let keltemp=celtemp+273.15
faranite_input.value=round_number(fartemp)
kelvin_input.value=round_number(keltemp)
})

faranite_input.addEventListener('input', function(){
    let fartemp=parseFloat(faranite_input.value)
    let celtemp=(fartemp-32)*(5/9)
    let keltemp=celtemp+273.15
    celcius_input.value=round_number(celtemp)
    kelvin_input.value=round_number(keltemp)
})
kelvin_input.addEventListener('input', function(){
    let keltemp=parseFloat(kelvin_input.value)
    let celtemp=keltemp-273.15
    let fartemp=celtemp * (9/5) +32
    celcius_input.value=round_number(celtemp)
    faranite_input.value=round_number(fartemp)
})
reset.addEventListener('click',() =>{
    celcius_input.value=""
    faranite_input.value=""
    kelvin_input.value=""
})
