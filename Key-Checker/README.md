<h1>Key Checker</h1>

<h3>Solution code</h3>

```javascript
    const container = document.querySelector("#container");

window.addEventListener('keydown',(e)=>{
    container.innerHTML = `
    <table>
    <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>code</th>
    </tr>
    <tr>
        <td>${e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
    </table>`
    })
```

```html

    <table>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>code</th>
        </tr>
        <tr>
            <td>${e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
```