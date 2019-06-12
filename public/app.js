$(() => {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';

    $('#fetch-posts').click(() => {
        $.getJSON(`${BASE_URL}/posts`, (data) => {
            console.log(data);
        });
    });
      
});
