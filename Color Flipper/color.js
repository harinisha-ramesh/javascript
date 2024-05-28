const color=document.getElementById("color")
const wrap=document.getElementById("wrap")
const btn=document.getElementById("btn")
const hexValue=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',changeCol)
function changeCol(){
    let hexColor= "#"
    for(let i=1;i<=6;i++){
        hexColor += randValue()
    }
    wrap.style.backgroundColor = hexColor
    color.innerHTML= hexColor
}    
function randValue() {
    let randomValue = Math.floor(Math.random()*16)
    return hexValue[randomValue]
} 
