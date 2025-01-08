const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;  // Railway에서 자동으로 포트 설정

// CORS 설정
app.use(cors());

// JSON 본문 파싱 설정
app.use(express.json());

// 기본 사용자 데이터 (임시)
const users = [
  { id: 'iamamaster', password: 'ub2@sine69' },
  { id: 'master', password: '12345678' },
];

// GET 엔드포인트 (테스트용)
app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// POST 엔드포인트 (로그인 처리)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // 사용자 인증
  const user = users.find((user) => user.id === username && user.password === password);
  if (user) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server running at https://linkback-production.up.railway.app:${port}`);
});
