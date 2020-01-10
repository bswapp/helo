SELECT posts.title, posts.img, posts.content, helo.username, helo.profile_pic
FROM posts
JOIN helo ON posts.author_id = helo.id
WHERE posts.id = $1