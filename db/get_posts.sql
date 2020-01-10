SELECT helo.username, helo.profile_pic, posts.title, posts.img, posts.content, posts.author_id, posts.author_id, posts.id 
FROM posts
JOIN helo ON posts.author_id = helo.id