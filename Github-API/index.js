const xhr = new XMLHttpRequest();
const requestURL = 'https://api.github.com/users/dineshEth';

const bio = document.getElementById('bio');
xhr.open('GET',requestURL);

xhr.onreadystatechange = function (){
    if(xhr.readyState === 4){
        let data = JSON.parse(this.response);
        bio.innerHTML = data.bio;
        console.log(data.bio);
    }
}
xhr.send();