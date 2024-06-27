// use       : https://js.cybozu.com/kintone-rest-api-client/5.5.1/KintoneRestAPIClient.min.js
// reference : https://cdn.jsdelivr.net/gh/metalit-wellknowledge/kintone/get_apps_all_records.js
console.log("GOOD");

(() => {
  'use strict';
  kintone.events.on('app.record.index.show', async (event) => {
    try {
      // クライアントの作成
      const client = new KintoneRestAPIClient();

      // リクエストパラメータの設定
      const APP_ID = 6;
      const params = {
        app: APP_ID,
      };

      // レコードの取得
      // レコードメソッドで使用できるもの一覧：https://github.com/kintone/js-sdk/blob/main/packages/rest-api-client/docs/record.md
      const resp = await client.record.getAllRecords(params);
      console.log(resp.record);
    } catch (err) {
      console.log(err);
    }
  });
})();
