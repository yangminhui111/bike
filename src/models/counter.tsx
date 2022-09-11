export interface ICounterType{
count:number;
}
export interface ICounterAction{
    type:string
}
export default {
    namespace:'counter',
    state:{
        count:0
    },
    reducers:{
        add(state:ICounterType,action:ICounterAction){
            return {count:state.count+1}
        }
    }
}