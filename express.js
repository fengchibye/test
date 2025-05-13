const express = require('express');
const app = express();

/* 用表单发送请求http://localhost:3000/user*/
app.use(express.urlencoded({ extended: false }));
app.post('/user', (req, res) => {
    const params = req.body;
    for (let i in params) {
        console.log(`参数：${i} 参数值:${params[i]}`);
    } 
    res.send('<h1>已成功解析get请求参数</h1>');
})

app.listen(3000, () => {
    console.log('服务器启动成功');
});
