const Sequelize = require('sequelize');
const sequelize = new Sequelize('instagram', null , null, {
  host: 'localhost',
  dialect:'postgres',
});

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

const Post = sequelize.define('post', {
  title: Sequelize.STRING,
  image: Sequelize.BLOB
});

sequelize.sync()
  .then(() => Post.create({
    title: 'test',
    image: "Image"
  }))
  .then(post => {
    console.log(post.get({
      plain: true
    }));
  });
