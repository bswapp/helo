const bcrypt = require("bcryptjs");

module.exports = {
  register: () => {},
  login: () => {},
  searchPosts: () => {},
  getPost: () => {},
  addPost: () => {},
  logout: () => {
    req.session.destroy;
    res.sendStatus(200);
  }
};
