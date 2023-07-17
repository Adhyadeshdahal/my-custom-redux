function createStore(reducer){
    let state;
    let subscribeFn =[];

    function getState(){
        return state;
    };

    function dispatch(action){
        //call reducer
      state = [...reducer(state,action)];
      subscribeFn.length?subscribeFn.map(lfn =>{lfn()}):null;
        //call subscriber
    };

    

    function subscribe(fn){
        subscribeFn.push(fn);
        return ()=>{
           subscribeFn =[...subscribeFn.filter(lfn =>{
                lfn!==fn;
            })];
        };
    }

    return {
        getState,
        dispatch,
        subscribe
    }

}