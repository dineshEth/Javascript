<h1> Text Reader</h1>
<p>Reads the written text</p>

<h2> Soluiton Code </h3>

<p>SpeakText function Implementation</p>

```javascript
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
```