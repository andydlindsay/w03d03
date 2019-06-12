# W03D03 AJAX

### To Do
- [ ] Use AJAX to retrieve data from a remote server
- [ ] Use jQuery to update the DOM with the retrieved data
- [ ] Use AJAX to submit data to a remote server
- [ ] All without refreshing the browser

## AJAX

Asynchronous Javascript And XML

XMLHttpRequest (XHR)

```js
$.ajax({
    url: 'www.example.com/posts',
    method: 'GET',
    dataType: 'json',
    success: (data) => {
        console.log('ajax executed successfully and here\'s the data', data);
    },
    error: (error) => {
        console.error('errors happened', error);
    }
});
```js

API - Application Programming Interface














### Useful Links
* [Blog post coining AJAX](https://web.archive.org/web/20160305044414/http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)
* [Post/Redirect/Get (PRG)](https://en.wikipedia.org/wiki/Post/Redirect/Get)
* [AJAX](https://en.wikipedia.org/wiki/Ajax_(programming))
* [XMLHttpRequest (XHR)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* jQuery [AJAX](http://api.jquery.com/jquery.ajax/), [getJSON](https://api.jquery.com/jquery.getjson/), and [post](https://api.jquery.com/jquery.post/) methods
