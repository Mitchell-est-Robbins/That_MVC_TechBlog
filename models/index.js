const User = require('./User');
const Project = require('./Project');
const Comment = require("./comment")

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

//===============comments================

// each project can have a bunch of comments
Project.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

//each comment belongs to a user
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Project, Comment };
