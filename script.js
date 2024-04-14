
'use strict';
function showNotification(text) {
    Toastify({
      text: text || "Please enter any text !",
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  }

function clearInput(){
    document.getElementById("input-text").value=""
 }
 function clearOutput(){
    document.getElementById("result").innerHTML=""
 }

let originalText = "I love my country Pakistan. <br> I love my city Faisalabad. <br> I love my homeland";

function lowerCase() {
    let lowerCaseText = originalText.toLowerCase();
    console.log(lowerCaseText);
    document.getElementById("result").innerHTML = lowerCaseText;
}

function upperCase() {
    let upperCaseText = originalText.toUpperCase();
    document.getElementById("result").innerHTML = upperCaseText;
}


let cities=["Faisalabad","Lahore","Karachi","Islamabad","Peshwar","Quetta","Multan"]

function PrintCities (){
    document.getElementById("result").value=""
    document.getElementById("result").innerHTML=""
for (let index = 0; index < cities.length; index++) {
    console.log('city',cities[index])
     document.getElementById("result").innerHTML+=index+1+")"+cities[index]+"</br>"
    
    
}
}

function capitalize(){

    document.getElementById("result").style.textTransform="capitalize"
    document.getElementById("result").innerHTML=originalText
}

function formatting(){
    let text=document.getElementById("input-text").value
if(!text){
    // alert(" Please enter any text ")
    // Toastify({
    //     text: "Please enter any text !",
    //     duration: 3000,
    //     close: true,
    //     gravity: "top", // `top` or `bottom`
    //     position: "left", // `left`, `center` or `right`
    //     style: {
    //       background: "linear-gradient(to right, #00b09b, #96c93d)",
    //     },
        
    //   }).showToast();
    notification()
    return
    
}
    text=text.toLowerCase()
    document.getElementById("result").style.textTransform="capitalize"
    document.getElementById("result").innerHTML=text
}

function addCity(){
    let cityfound= false
     let city=document.getElementById("input-text").value
    let firstLetter=city.slice(0,1).toUpperCase()
    let otherLetter=city.slice(1).toLowerCase()
    city=firstLetter+otherLetter
    console.log(city);
     if(city.length<3){
    //    alert("Please enter proper city name")
    Toastify({
        text: "Please enter proper city name",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        
      }).showToast();
        return
        
    }
     for (let index = 0; index < cities.length; index++) {
        console.log('city',cities[index])
        if (city===cities[index]) {
         document.getElementById("result").innerHTML="<span style='color: green;'>" + city + "</span> is  sucessfully added in the list";
            cityfound=true
            break
        }    
    }
    if(!cityfound){
        document.getElementById("result").innerHTML="<span style='color: green;'>" + city + "</span> is  sucessfully added in the list";
        cities.push(city)
    }
    
   
}


function checkCity(){
    let cityfound= false
     let city=document.getElementById("input-text").value
    let firstLetter=city.slice(0,1).toUpperCase()
    let otherLetter=city.slice(1).toLowerCase()
    city=firstLetter+otherLetter
    console.log(city);
     if(city.length<3){
      showNotification("Please enter proper city name to check in the list !")  
    
        return
        
    }
     for (let index = 0; index < cities.length; index++) {
        console.log('city',cities[index])
        if (city===cities[index]) {
            document.getElementById("result").innerHTML="<span style='color: green;'>" + city + "</span> is  found in the list";
            cityfound=true
            break
        }    
    }
    if (!cityfound) {
        document.getElementById("result").innerHTML = "<span style='color: red;'>" + city + "</span> is not found in the list";
      }
      
    
   
}

function findWord (){
     
     let Key=document.getElementById("input-text").value
     if(!Key){
        showNotification("Please enter the key")
        return
     }
     originalText=originalText.toLowerCase()
     document.getElementById("result").innerHTML=originalText
     let findingIndex=originalText.indexOf(Key)
     if(findingIndex!== -1){
       showNotification(Key+" is found at"+" "+findingIndex)
     }
     else{
        showNotification("Word is not found in the string")
     }
}

function replaceWord (){
     originalText=originalText.toLowerCase()
    let words=document.getElementById("input-text").value;

    if(!words){
    //    alert("Please any word from original text to replace")
    showNotification("Please any word from original text to replace")
        return
    }

    let replaceWith=prompt("please enter your text")

    if(!replaceWith){
        // alert("please enter any word to  replace !")
        showNotification("please enter any word to  replace !")
        return
    }
   words= new RegExp(words,'g')
   replaceWith=replaceWith.toLowerCase()

   let replaceWoprds=originalText.replace(words,replaceWith)
   document.getElementById("result").innerHTML=replaceWoprds
}


