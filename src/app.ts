//express...Node.js の Web フレームワークで、Web アプリや API を簡単に作れる。
import express from 'express';

//インスタンス生成
const app = express();

//json形式のデータを受け取れるようにする。
app.use(express.json());

//環境変数に設定されたポート番号を使用する（無ければ3000を使用）
const PORT = process.env.PORT || 3000;

//GETリクエスト
app.get('/', (req, res) => {
    res.json({message: 'Hello World'});
});

app.listen(PORT, () => console.log('Server is running'));