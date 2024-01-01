<h1>Background Changer</h1>

```Javascript
    console.log("Background Changer Js code");

    const button =  document.querySelectorAll('.button');

    const body =  document.querySelector('body');

    button.forEach((button) => {
        button.addEventListener('click',(e)=>{
            if(e.target.id !== null) {
                if(e.target.id === "violet") {
                    body.style.color = "white";
                    body.style.backgroundColor = "#8222b6";
                }
                else if(e.target.id === "black"){
                    body.style.color = "white"
                    body.style.backgroundColor = "#000";
                }
                else if(e.target.id === "green"){
                    body.style.color = "#000"
                    body.style.backgroundColor = "#18d3a5";
                }
                else if(e.target.id === "blue"){
                    body.style.color = "white"
                    body.style.backgroundColor = "#1f40d3";
                }
                else if(e.target.id === "white"){
                    body.style.color = "#000"
                    body.style.backgroundColor = "#fff";
                }
            }
        });
    })
```