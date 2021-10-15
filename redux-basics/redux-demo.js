const redux = require('redux')

//create a reducerFunction(tqo parameters old state plus the dispatched action and output new state object)
const counterReducer = (state = {counter:0}, action) => {
    if(action.type === "increment") {
        return {counter: state.counter+1}
    }
    if(action.type === "decrement"){
        return {counter: state.counter - 1}
    }

    return state;
}

//create store
const store = redux.createStore(counterReducer)

const counterSubscriber = () => {
    return store.getState() //method that gives us the latest stored valued in the store
}

//making redux aware of the subscriber function
store.subscribe(counterSubscriber)

//create and dispatch(javascript object wih a type property) an action
store.dispatch({type: 'increment'})
store.dispatch({type:'decrement'})

console.log(store.getState());