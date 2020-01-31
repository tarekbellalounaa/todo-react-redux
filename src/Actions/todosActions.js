import {ADD , COMP , DEL , EDIT, DONE} from './types'

export const ADDITION = (x) => {
    return{
        type:ADD,
        payload:x
    }
}

export const COMPLETE = (id) => {
    return{
        type:COMP,
        payload:id
    }
}
export const DELETE = (id) => {
    return{
        type:DEL,
        payload:id
    }
}
export const EDITER = (id) => {
    return{
        type:EDIT,
        payload:id
    }
}

export const DOONE = (id,newtext) => {
    return{
        type:DONE,
        payload:{id , newtext}
        
    }
}