var posts=["posts/sdas2d.html","posts/undefined.html","posts/sdasdd.html","posts/dgdsf.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};