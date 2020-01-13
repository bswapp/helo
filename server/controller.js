const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");

    // bcrypt //
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    let user = await db.register(username, hash);
    user = user[0];
    req.session.userId = user.id;
    res.status(200).send(user);
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    let returningUser = await db.login(username, password);
    returningUser = returningUser[0];
    const authenticated = bcrypt.compareSync(password, user.password);
    if (authenticated) {
      delete user.password;
      req.session.id = returningUser[0].id;
      if (returningUser) {
        res.status(202).send(returningUser);
      } else {
        res.status(401).send("Username cannot be found.");
      }
    } else {
      res.status(401).send("Password is incorrect.");
    }
  },

  searchPosts: async (req, res) => {
    const { userspost, search } = req.query;
    const db = req.app.get("db");
    const allPosts = await db.get_posts();
    let filtered = null;
    console.log(allPosts);

    if (userspost === "true" && search) {
      filtered = allPosts.filter(() => {
        if (e.title.includes(search)) return true;
      });
    } else if (userspost === "false" && search) {
      filtered = allPosts.filter(e => {
        if (e.author_id !== req.session.id && e.title.includes(search))
          return true;
      });
    } else if (userspost === "true" && !search) {
      filtered = allPosts;
    } else {
      filtered = allPosts.filter(e => {
        if (e.author_id !== req.session.userId) return true;
      });
    }

    res.status(200).send(filtered);
  },

  getPost: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    let post = await db.get_post(+id);
    post = post[0];
    res.status(200).send(post);
  },

  addPost: (req, res) => {
    const { title, img, subtitle } = req.body;
    const db = req.app.get("db");
    db.add_post(title, img, subtitle, req.session.userId);
    res.sendStatus(200);
  },

  me: async (req, res) => {
    const db = req.app.get("db");
    let user = awaitdb.me(req.session.userId);
    usrd = user[0];
    const { username, profile_pic } = user;
    res.status(200).send({ username, profile_pic });
  },

  logout: (req, res) => {
    req.session.destroy;
    res.sendStatus(200);
  }
};
