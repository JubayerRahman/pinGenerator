document.getElementById("redNotification").style.display="none"
document.getElementById("grennNotification").style.display="none"

const generateButton= document.getElementById("generateButton").addEventListener("click", function(){
    const number= 1000 + Math.random()*9000
    const randonNumber= Math.round(number)
    const randonNumberStrping= randonNumber +'';


    document.getElementById("showNumber").value=randonNumberStrping;
})

document.getElementById("keypad").addEventListener("click" , function(event){
    const number = event.target.innerHTML;
    
    console.log(number)

    const text= document.getElementById("showText").value
    
    const previousNumber = text
    const newNumber = previousNumber +number;
    document.getElementById("showText").value= newNumber;

    if(number == "C"){
        document.getElementById("showText").value= " ";
    }
    if(number == "&lt;"){
    document.getElementById("showText").value = "Dont Know how to do it :)"; 
    }
})

document.getElementById("submit").addEventListener("click", function(){

    const inputNumber= document.getElementById("showText").value;
    const genaratedNumber= document.getElementById("showNumber").value;

    if(inputNumber == genaratedNumber){
        document.getElementById("grennNotification").style.display="block"
    }
    else{
        document.getElementById("redNotification").style.display="block" 
    }

    const try1 = document.getElementById("try").innerHTML
    const attempNumber = parseFloat(try1);
    document.getElementById("try").innerHTML = attempNumber-1

    if(try1 == 0){
       document.getElementById("submit").style.display="none"; 
       document.getElementById("try").innerHTML = 0;
 
    }
})