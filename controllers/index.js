const router = require('express').Router();
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboardRoutes')
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
module.exports = router;

// Post.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: "CASCADE"
// });
// Post.hasMany(Comment, {
//     foreignKey: 'post_id',
//     onDelete: 'CASCADE',
// });
// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: "CASCADE"
// })