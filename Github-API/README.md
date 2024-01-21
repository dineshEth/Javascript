<h1>Github data</h1>

<p>Github Data card</p>


<h3>Solution code</h3>

```javascript
// setup a callback function to handle the response
xhr.onreadystatechange = () =>{
    if(xhr.readyState == XMLHttpRequest.DONE){
        if(xhr.status == 200){
            // parse the response, assuming it's JSON
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            avatarUrl.setAttribute('src',`${data.avatar_url}`);
            username.innerHTML = `${data.name}`;
            bio.innerHTML = `${data.bio}`
            geoLocation.innerHTML = `${data.location}`;
            repos.innerHTML = `${data.public_repos}`;
            followers.innerHTML = `${data.followers}`
            following.innerHTML =`${data.following}`
            
        }
        else{
            console.error(xhr.status, xhr.statusText);
        }
    }
}
xhr.open('GET',requestURL,true);
xhr.send()
```