const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const usersRouter = new Router({prefix: '/users'})

router.get('/', () => {
    ctx.body = '这是主页'
})

usersRouter.get('/', (ctx) => {
    ctx.body = [{name: '李雷'}, {name: '韩梅梅'}]
})

usersRouter.post('/', (ctx) => {
    ctx.body = '创建用户'
})

usersRouter.get('/:id', (ctx) => {
    ctx.body = [{name: '李雷'}]
})

usersRouter.put('/:id', (ctx) => {
    ctx.body = [{name: '李雷2'}]
})

usersRouter.delete('/:id', (ctx) => {
    ctx.status = 204
})

app.use(router.routes())
app.use(usersRouter.routes())
app.use(usersRouter.allowedMethods())

app.listen(3000)