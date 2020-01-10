const bcrypt = require("bcryptjs");

module.exports = {
  register: () => {},
  login: () => {},
  searchPosts: () => {},
  getPosts: () => {},
  addPost: () => {},
  logout: () => {
    req.session.destroy;
    res.sendStatus(200);
  }
};
