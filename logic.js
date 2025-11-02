function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function fun1()
{
    window.location.href = "page1.html";
}
function fun2()
{
    window.location.href = "page2.html";
}
function fun3()
{
    const freqRange = document.getElementById('freqRange').value;
   const voices = window.speechSynthesis.getVoices();
    var txt2=document.getElementById("txa").value;
     var txt3=document.querySelector("#voc").value;
      if ('speechSynthesis' in window) { 
            let working = new SpeechSynthesisUtterance(txt2); 
            
            
            if(txt3==="mv")
           {
            for(let i=0;i<freqRange;i++)
            {
                 working.voice=voices[1];
            window.speechSynthesis.speak(working); 
            }
           
           }
           else
           {
                 for(let i=0;i<freqRange;i++)
            {
                 working.voice=voices[2];
            window.speechSynthesis.speak(working); 
            }
           }
            } 
   
            else{ 
            alert("Browser doesnot support voice method");
            }

}
const freqRange = document.getElementById('freqRange');

freqRange.addEventListener('input', function() {
        const frequency = freqRange.value;
        document.getElementById('txt1').innerText = `Selected Frequency: ${frequency} `;
    });


window.speechSynthesis.onvoiceschanged = function() {
fun3(); // Refresh the voices list
};