import expect from 'expect'
import { createStore } from 'redux'

//reducer
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)

//画面更新用の関数を作成
const render = () => {
  document.body.innerText = store.getState()
}

//subscribe関数に、現在のstateの状況を画面に表示する関数をセット
store.subscribe(render)

//最初に画面を表示（0が表示される)
render()

//documentオブジェクトをクリックしたらINCREMENTアクションをdispatchする
//イベントを追加
document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' })
})

