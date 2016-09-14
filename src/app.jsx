import expect from 'expect'
import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'

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

//Counterコンポーネントを作成。カウンターの値(value)をpropsにとる
const Counter = ({
  value,
  onIncrement,
  onDecrement
  }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

const store = createStore(counter)

//画面更新用の関数を作成
const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />,
    document.getElementById('root')
  )
}

const onIncrement = () => {
  store.dispatch({ type: 'INCREMENT' })
}

const onDecrement = () => {
  store.dispatch({ type: 'DECREMENT' })
}

//subscribe関数に、現在のstateの状況を画面に表示する関数をセット
store.subscribe(render)

//最初に画面を表示（0が表示される)
render()
