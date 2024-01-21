<h1> Speech To Text </h1>

<h2> Soluiton Code </h3>

<p>Start speaking Function</p>
```javascript
    function speaking(recognition,language){
        // Object of langauges
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
```

<p>Stoping from speaking Function</p>

```javascript
    function stopSpeaking (recognition) {
    recognition.stop()
    recognition.onend = () => {
        console.log('Speech recognition ended.');
    };
    result(recognition); 
    }
```

<p>Result function after speaking end</p>

```javascript
    function result(recognition){
    console.log("called result")
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        textOutput.innerText = `${transcript}`;
    };
    }
```