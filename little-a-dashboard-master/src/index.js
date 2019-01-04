import './index.html'
import 'babel-polyfill'
import dva from 'dva'
import createLoading from 'dva-loading'
import { hashHistory } from 'dva/router'
import { message } from 'antd'
import createHistory from 'history/lib/createHashHistory'
let history2 = createHistory({
  queryKey: false,
})
// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true
  }),
  history: history2,
  onError (error) {
    message.error(error.message)
  }
})

// 2. Model
app.model(require('./models/app'))

// 3. Router
app.router(require('./router'))

// 4. Start
app.start('#root')
