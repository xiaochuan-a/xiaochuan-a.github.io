var posts=["posts/sdas2d.html","posts/sdasdd.html","posts/undefined.html","posts/dgdsf.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};