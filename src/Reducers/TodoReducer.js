import { DEL, COMP, ADD, EDIT ,DONE } from "../Actions/types"

const TodoReducer = (state=[],action) => {
    switch(action.type){
        case ADD :
            return state.concat(action.payload)

            case COMP :
                return state.map(el => el.id === action.payload ? {...el, complete: !el.complete} : el) 
                
        case DEL :
            return state.filter(el => el.id!==action.payload)   
            
            case EDIT :
            return state.map(el => el.id === action.payload ? {...el, edit: !el.edit} : el)  
            
            case DONE :
            return state.map(el => el.id === action.payload.id ? {...el, edit: !el.edit , text : action.payload.newtext}  : el )  

            default:
            return state
            }
    
}
export default TodoReducer;
