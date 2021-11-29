const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;
const KEY = "test_key" // jwt만들 때 시크릿키로 사용
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/test.html'); // 실습을 위한 인덱스 파일
});

/* 이후 코드가 들어갈 자리 */


app.get('/sign_token', (req, res) => {
	let token = jwt.sign({ name: 'sancho', exp: parseInt(Date.now()/1000)+10 }, KEY); // 만료기간 10초
	res.json({ token });
});
app.get('/check_token', (req, res) => {
	let token = req.headers['token'];
	try {
		let payload = jwt.verify(token, KEY);
		console.log('토큰 인증 성공', payload)
		res.json({ msg: 'success' });
	} catch (err) {
		console.log("인증 에러");
		res.status(405).json({ msg: 'error' });
		next(err)
	}
});


app.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}`);
});

