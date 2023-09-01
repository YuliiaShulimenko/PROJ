const LOAD_CATEGORIES = "LOAD_CATEGORIES"

export const loadCategoriesAction = payload =>({type:LOAD_CATEGORIES,payload})

export const CategoriesReduser = ( state = [], action )=>{
    if(action.type === LOAD_CATEGORIES){
        console.log(action.payload);
        return action.payload

    
    }else{
        return state
    }


    }