const heading = document.querySelector("#heading");

let str = heading.innerHTML;

console.log(str)

let current = 0;
window.addEventListener('keydown',(e)=>{
    if(e.key === str[current]){
        current++;
    }
})