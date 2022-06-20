import { isLogin } from "../contants/contants"


let handalLogin =(value:any)=>{
    return{
        type:isLogin,
        payload:value
    }
}
export default handalLogin;