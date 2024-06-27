// reference : https://cdn.jsdelivr.net/gh/user/repo@version/file

const body = {
  app: kintone.app.getId(),
  id: 1
};

kintone.api(kintone.api.url('/k/v1/record.json', true), 'GET', body, (resp) => {
  // success
  console.log(resp);
}, (error) => {
  // error
  console.log(error);
});
