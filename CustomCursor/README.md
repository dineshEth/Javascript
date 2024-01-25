# Mousemovement

### custom cursor

```javascript
    document.addEventListener('DOMContentLoaded', function ()
    {
        let cursor = document.querySelector('#cursor');
        let cursor2 = document.querySelector('#cursor2');
        document.addEventListener('mousemove', function (e)
        {
            let x = e.clientX; // position in X
            let y = e.clientY; // position in Y
            cursor.style.transform = `translate(${x-75}px, ${y-75}px)`;
        });
    });
```