import{addFlashMessage}from'../actions/flashMessages'

export default (state=[],action={})=>{
    switch(action.type){
        case 'Add_FLASH_MESSAGE':
        return[...state,{}]
        default:return state
    }
}