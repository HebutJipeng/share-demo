const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  const res = 'Hello World';
  ctx.body = res;
});

app.listen(3000);

