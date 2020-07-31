/* Part 1: Hidden*/

function notify(){
    document.getElementById('success').style.display="none";
    document.getElementById('fail').style.display="none";
 }

/*Part 2: 4 Digit Generate Pin*/ 

document.getElementById('generate').addEventListener('click',function(){
    var randomNumber = Math.floor(1000+ Math.random()*9000);
    document.getElementById('textview').value=randomNumber;
    clean();
    notify();
})

/*Part 3: Insert Number*/

function insert(num){
    document.form.text.value = document.form.text.value + num;
 }


 /*Part 4: SubmitButton(Pin Matched & Pin Didn't Matched)*/

document.getElementById('submitBtn').addEventListener('click', function(){
     if(document.getElementById('textview').value == ""){
         alert('Generate a pin number');
     }
     else if(document.form.text.value==""){
         alert('Enter a number');
     }
     else if(document.getElementById('textview').value==document.form.text.value){
         const pinMatch = document.getElementById("success");
         pinMatch.style.display = "block";
     }
     
     else{
         const pinMisMatch = document.getElementById("fail");
         pinMisMatch.style.display = "block";
     }

})

/*Bonus Part*/


function clean(){
    document.form.text.value="";
    notify();
   }
 
 function back(){
      var exp = document.form.text.value;
      document.form.text.value = exp.substring(0,exp.length-1);
      notify();
  }
