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

//getStateで、現在のstateを返す
console.log(store.getState())

//dispatch(<アクション>)で、reducerにStateとActionを送る・・・Stateがアクションの内容に
//より変化
store.dispatch({type: 'INCREMENT'})

//Stateが変化したか確認
console.log(store.getState())

//subscribe関数に、現在のstateの状況を画面に表示する関数をセット
store.subscribe(() => {
  document.body.innerText = store.getState()
})

//documentオブジェクトをクリックしたらINCREMENTアクションをdispatchする
//イベントを追加
document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' })
})

//キーボードを押下したらDECREMENTアクションをdispatchする
document.addEventListener('keyup', () => {
  store.dispatch({ type: 'DECREMENT' })
})
