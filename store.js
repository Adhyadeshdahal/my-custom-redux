function createStore(reducer){
    let state;
    let subscribeFn = ()=>{null};

    function getState(){
        return state;
    };

    function dispatch(action){
        //call reducer
      state = [...reducer(state,action)];
      subscribeFn();
        //call subscriber
    };

    function unSubscribe(){
        subscribeFn= ()=>{null};
    };

    function subscribe(fn){
        subscribeFn=fn;
        return unSubscribe;
    }

    return {
        getState,
        dispatch,
        subscribe
    }

}