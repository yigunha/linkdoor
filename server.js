const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;  // Railway에서 자동으로 포트를 설정

// CORS 설정
app.use(cors());

// 간단한 API 엔드포인트
app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// HTTP 서버로 실행 (Railway에서 HTTPS 자동 처리됨)
app.listen(port, () => {
  console.log(`Server running at linkdoor-production.up.railway.app:${port}`);
});

