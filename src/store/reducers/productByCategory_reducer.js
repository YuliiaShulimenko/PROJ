
const inicialState = []
    const LOAD_PRODUCTS_BY_CATEGORY = "LOAD_PRODUCTS_BY_CATEGORY"

    export const loadProductsByCategoryAction = payload =>({type:LOAD_PRODUCTS_BY_CATEGORY,payload})
    
    export const productsByCategoryReducer = ( state = inicialState, action )=>{
        if(action.type === LOAD_PRODUCTS_BY_CATEGORY){
            return action.payload
    
        
        }else{
            return state
        }
    
    
        }