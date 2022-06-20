import { isLogin } from "../contants/contants";

let initialState ={
    email:'',
    password:""
}

let rootReducer =(state:any=initialState,action:any)=>{
    
    switch(action.type){
        case isLogin:
            return{
                ...state,
                initialState:action.payload
            }

        default:
            return state
    }
}

export default rootReducer;