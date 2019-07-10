console.log('ok');
this.addEventListener('fetch', function (event) {
    console.log('ojjk');
    event.respondWith(
        new Response('Hello world!')
    );
});
