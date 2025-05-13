const express = require('express');

const app = express();

const router = express.Router('./router.js');
router.get('/name', (req, res) => {
  res.send('姓名:张三');
});
router.get('/age', (req, res) => {
  res.send('年龄:25');
});

app.use('/user',router); // 使用路由中间件

app.listen(3000, () => {
  console.log('服务器启动成功');
}); 