$(() => {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';

    function createPost(post) {
        const $article = $('<article>');
        const $title = $('<header>').text(`Title: ${post.title} (${post.id})`);
        const $body = $(`<p>${post.body}</p>`);
        $.getJSON(`${BASE_URL}/users/${post.userId}`, (user) => {
            const $footer = $('<footer>').text(`Author: ${user.name} (${user.email})`);
            $article.append($title, $body, $footer).appendTo('#posts');
        });
    }

    $('#fetch-posts').click(() => {
        $.getJSON(`${BASE_URL}/posts`, (data) => {
            const $posts = $('#posts');
            $posts.empty();
            data.slice(5, 15).forEach(createPost);
        });
    });

    $('#new-post').on('submit', (event) => {
        event.preventDefault();
        $.post(`${BASE_URL}/posts`, $('#new-post').serialize(), (newPost) => {
            createPost(newPost);
        });
    });
      
});
