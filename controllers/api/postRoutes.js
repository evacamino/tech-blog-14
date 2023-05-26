const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const delPost = await Post.destroy({ where: { username: req.params.id }
      });
  
      res.status(200).json(delPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
module.exports = router;