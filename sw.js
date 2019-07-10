self.addEventListener('fetch', ev => {
    console.log('Handling fetch event for', event.request.url);
    ev.respondWith(new Response('OJJK'));
});
