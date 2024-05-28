const button=document.querySelector("button")
/*instead of giving getElementById we can give queryselector
inside it as like css if it was id give #,class .,or a tag 
no need of special character*/

//Event Listener
/* -->first give which element should need the eventlistener
 -->Then give addEventListener
 -->Then give the event
 -->And last if that event happens which function should it call so give a function name
*/

button.addEventListener("click",fun1)
function fun1(){
    const input=document.getElementById("input")
    //selectedIndex will show which value is selected in the dropdown
    //options will give the options given in the dropdown
    let cityName=input.options[input.selectedIndex].value
    console.log(cityName)
    let population=0 , literacyRate=0, language=""
//Switch was used similar like if else condition and in switch we can give the case1 and case2 values
    switch(cityName){
        case 'Bengaluru':
            population = 8443675
            literacyRate = 88.71
            language='Kannada'
            break
        case 'Chennai':
            population = 4646732
            literacyRate = 90.20
            language='Tamil'
            break
        case 'Hyderabad':
            population = 16787941
            literacyRate = 86.20
            language='Telugu'
            break
        case 'Mumbai':
            population = 12442373
            literacyRate = 89.73
            language='Marathi'
            break  

    }
    let text=`The Indian city of ${cityName} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}%.`
    document.querySelector("#result").innerHTML=text
}

