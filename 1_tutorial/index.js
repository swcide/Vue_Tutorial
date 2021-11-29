//express 모듈 불러오기
const express = require("express");
const axios = require('axios')
const url = require('url');

//express 사용
const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

let test = [1,2,3]


/**
 * @path http://localhost:3000/ 경로
 */
app.get("/", (req, res) => {
    res.send("Test")
});
  
app.get("/api/users", (req, res) => {

    res.json({ok: true, users: users});
})



app.get("/api/test", (req, res) => {



    const user_id = req.query.id
    const user_pwd = "1233456"
    const user1 = req.query.user1
    const user2 = req.query.user2
    const user3 = req.query.user3
    const user4 = req.query.user4
    const user5 = req.query.user5


    const user = {
        id : user_id,
        pwd : user_pwd

    
    }
    

    console.log(user)
    res.send(user_id)
    console.log(user_id)

});


// http listen port 생성 서버 실행
app.listen(3000);