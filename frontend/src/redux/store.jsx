import {createStore ,applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk';

const initials={
    adminauth:false,
    userauth:false,
    username:null,
    userid:null
}
function reducer(globalstate=initials ,action){
   switch (action.type){

      case "usertrue":
         return{
            ...globalstate,
            userauth:true
         }
         case "userfalse":
         return{
            ...globalstate,
            userauth:false
         }
         case "setusername":
            return {
               ...globalstate,
               username:action.payload
            }
            case "adminfalse":
               return{
                  ...globalstate,
                  adminauth:false
               }
               case "admintrue":
                  return{
                     ...globalstate,
                     adminauth:true
                  }

            case "setuserid":
               return{
                  ...globalstate,
                  userid:action.payload
               }
    default:
      return globalstate;
  
   }
}

const store=createStore(reducer,applyMiddleware(thunk))
export default  store 