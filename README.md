# qiita-aggregate
## 機能
* qiitaの投稿について、ユーザID、集計期間を指定して投稿件数といいね数を集計する。
* 集計結果をCSV形式でコンソールに出力する。
* [qiita api](https://qiita.com/api/v2/docs)を利用。

## 使用方法
### ユーザIDの設定
`src/userIds.js`にstring配列として定義する。

### 集計期間の設定
`src/app.js`のstartDate、endDateで設定。

### 起動
```
npm install
npm start
```

## proxy対応
プロキシ環境下で使用する場合は、環境変数 `HTTPS_PROXY` に以下の形式でプロキシサーバのURLを設定する。  
`http://<hostname>:<port>`