var posts=["2023/11/28/hello-world/","2023/11/28/test-my-site-3/","2023/11/28/test-my-site-2/","2023/11/28/test-my-site-4/","2023/11/28/test-my-site/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };