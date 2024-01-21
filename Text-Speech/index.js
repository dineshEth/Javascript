let textInput =  document.querySelector('#textInput');
let lang = document.querySelector('#language');
let selectedLanguage = "English"; // default
let speak = document.querySelector('#speak');

lang.addEventListener('click',(e)=>{
    selectedLanguage = lang.value;
    textInput.setAttribute('placeholder',`Insert ${lang.value} text...`);
    // textInput.placeHolder = "Hello From Language"
    // console.log(lang.value);
    // console.log(e.target);
});



speak.addEventListener('click',(e)=>{
    console.log(textInput.value);
    speakText(textInput.value,selectedLanguage);
});

function speakText(text,lang){
    let languages = {
        "English" : 'en-US',
        "Hindi" :'hi-IN',
        "French" :'fr-FR',
        "Spanish" : 'es-ES',
        "German" :'de-DE',
        "Arabic" : 'ar-SA',
        "Italian" : 'it-IT'
    }
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = `${languages[lang]}` || 'en-US';   // language of utterance

    speech.rate = 1.0; // Speech rate (0 to 1.0 || 1 is the default)
    speech.pitch = 1.0; // Speech pitch (1.0 to 2.0 || 1 is the default)
    speech.volume = 1.0; // Speech  volume (0.1 to 10 || 1 is default)
    // speechSynthesis.pause();
    // speechSynthesis.resume()
    window.speechSynthesis.speak(speech);
}


(function () {
    setTimeout(()=>{
        let speech = new SpeechSynthesisUtterance("Welcome to Text Speaker");
    speechSynthesis.speak(speech);
    },2000) 
})();

