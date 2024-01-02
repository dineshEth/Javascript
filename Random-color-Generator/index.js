const hex = "0123456789ABCDEF";

function randomColorGenerator(){
    let color = "#";
    for(i= 0 ; i< 6; i++){
        const random = Math.floor(Math.random()*16);
        color +=  hex[random];
    }
    return color;
}

const generate = document.querySelector("#generate");

generate.addEventListener('click', (e)=>{

    document.body.style.backgroundColor = randomColorGenerator();

    const displayColorElement= document.querySelector("#colorName");
    displayColorElement.innerHTML = randomColorGenerator();
})