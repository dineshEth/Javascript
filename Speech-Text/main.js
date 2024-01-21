// console.log("Unable")
const textOutput = document.querySelector('#textOutput');
const speakButton = document.querySelector("#speak_button");
const stopButton = document.querySelector('#stop_button');

let lang = document.querySelector('#language');
let selectedLanguage = "English";

let SpeechRecognition;
let recognition;

(function (){
    if(window.SpeechRecognition || window.webkitSpeechRecognition){
        SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition =  new SpeechRecognition();
        console.log("I am there ");
    }
    else{
        console.log("I am not there")
        alert('Speech recognition is not supported in your browser.');
    }
})();

// console.log(textOutput.innerHTML  = "Hello from India");

speakButton.addEventListener('click',(e)=>{
    // e.preventDefault();
    selectedLanguage = lang.value;
    speaking(recognition,selectedLanguage);
    speakButton.setAttribute('disabled','');
    stopButton.removeAttribute('disabled');
    speakButton.classList.replace('btn-active','btn-disabled');
    stopButton.classList.replace('btn-disabled','btn-active');
});

stopButton.addEventListener('click',(e)=>{
    stopSpeaking(recognition);
    stopButton.setAttribute('disabled','');
    speakButton.removeAttribute('disabled');
    stopButton.classList.replace('btn-active','btn-disabled');
    speakButton.classList.replace('btn-disabled','btn-active');
    console.log('end')
});



function speaking(recognition,language){
    let languages = {
        "English" : 'en-US',
        "Hindi" :'hi-IN',
        "French" :'fr-FR',
        "Spanish" : 'es-ES',
        "German" :'de-DE',
        "Arabic" : 'ar-SA',
        "Italian" : 'it-IT'
    }
    recognition.continous = false;
    recognition.lang = `${languages[language]}`;
    recognition.onstart = ()=>{
        console.log("Speech recognition started")
    }
    recognition.start();
}

function stopSpeaking (recognition) {
    recognition.stop()
    recognition.onend = () => {
        console.log('Speech recognition ended.');
    };
    result(recognition); 
}

function result(recognition){
    console.log("called result")
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        textOutput.innerText = `${transcript}`;
    };
}


(function () {
    setTimeout(()=>{
        let speech = new SpeechSynthesisUtterance("Welcome to Speaker Text");
    speechSynthesis.speak(speech);
    },2000) 
})();
