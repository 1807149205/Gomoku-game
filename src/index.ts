import express from 'express';
import GameService from './service/GameService';
import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';

const app = express();
const PORT = 3000;

const gameService = new GameService();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/startGame', (req, res) => {
  const p1 = req.query.p1 as string;
  const p2 = req.query.p2 as string;
  if (!p1 || !p2) {
    res.send("fail");
    return;
  }
  gameService.startGame(p1, p2);
  res.send("ok");
});

app.get('/getAllRoom', (req, res) => {
  res.send(gameService.getAllGamingPlayer());
});

// 创建 HTTP 服务器
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// 处理 WebSocket 连接
wss.on('connection', (ws: WebSocket) => {
  console.log('New client connected');

  ws.on('message', (message: string) => {
    console.log(`Received message: ${message}`);
    ws.send('Hello, Client!');
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// 使用 HTTP 服务器启动监听
server.listen(PORT, () => {
  console.log(`Express with WebSocket! http://localhost:${PORT}`);
});

export default app;
