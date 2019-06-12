function createPost(post) {
    const $article = $('<article>');
    const $title = $('<header>').text(`Title: ${post.title}`);
    const $body = $(`<p>${post.body}</p>`);
    const $footer = $('<footer>').text(`Author: ${post.userId}`);
    $article.append($title, $body, $footer).appendTo('#posts');
}

$(() => {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';

    $('#fetch-posts').click(() => {
        $.getJSON(`${BASE_URL}/posts`, (data) => {
            const $posts = $('#posts');
            $posts.empty();
            data.slice(0, 10).forEach(createPost);
        });
    });
      
});
