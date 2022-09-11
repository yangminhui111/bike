import axios from 'axios'
export interface IUserState{
    isLoading:boolean;
    user:{data:[{email:string}]};
    error:{message:string};
}
export interface IUserAction{
    type:string;
    user:object;
    error:object;
}
export default{
    namespace:'user',
    state:{
            error:null,
            user:null
    },
    reducers:{
        'fetch/pending'(state:IUserState,action:IUserAction){
            return {
                error:null,
                user:null
            }
        },
        'fetch/success'(state:IUserState,action:IUserAction){
            return {
                error:null,
                user:action.user
            }
        },
        'fetch/reject'(state:IUserState,action:IUserAction){
            return {
                error:action.error,
                user:null
            }
        },

    },
    effects:{
        *fetch(payload:any,{put,call}:any){
            try{
                let user= yield call(axios.get,"/data");
                console.log('user',user)
            yield put({type:'fetch/success',user})
            }catch(error){
                yield put({type:'fetch/reject',error})
            }

        }
    }
}