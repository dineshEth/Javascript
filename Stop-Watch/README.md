<h1>Timer</h1>

<h1>Solution Code</h1>

```javascript
    const start = document.querySelector("#start")
    const stop = document.querySelector("#stop")
    const reset = document.querySelector("#reset")

    const min = document.querySelector("#min");
    const sec = document.querySelector("#sec");

    function startTimer() {
        if(parseInt(sec.innerHTML) < 59) {
            let seconds = parseInt(sec.innerHTML);
            if(seconds < 9){
                sec.innerHTML = `0${parseInt(sec.innerHTML) + 1}`;
            }
            else{
                sec.innerHTML = `${parseInt(sec.innerHTML) + 1}`;   
            }
        }
        else{
            sec.innerHTML = 0;
            let minutes = parseInt(min.innerHTML);
            if(minutes < 9){
                min.innerHTML = `0${parseInt(min.innerHTML) + 1}`;
            }
            else{
                min.innerHTML = `${parseInt(min.innerHTML) + 1}`;   
            }
        }
    }
    let interval;
    start.addEventListener('click',()=>{
        interval = setInterval(startTimer,1000)
    })

    stop.addEventListener('click',()=>{
        clearInterval(interval)
    })

    reset.addEventListener('click',()=>{
        min.innerHTML = "00";
        sec.innerHTML = "00";
    })
```