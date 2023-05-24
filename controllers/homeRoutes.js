const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
      //  User,
        {
          model: User,
          attributes: {exclude: ['password']}
          
        }

      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log("posts", posts)

    // Pass serialized data and session flag into template
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
      page_title: "Welcome to the tech-blog!"
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          // include: [User]
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('single_post', {
      post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('sign-up');
});

// router.get('/comments', async (req, res) => {
//   try {
//     const commentData = await Comment.findAll({})
//   const comments = commentData.map((post) => post.get({ plain: true }));
//   res.render('homepage', {


//   });

// }catch (err) {
//   res.status(500).json(err);
// }
// });

module.exports = router;
