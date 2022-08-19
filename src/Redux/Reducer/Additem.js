// const addItem = [];
//write functility here if action id addItem then add item and remove item then remove item
let id=0;
const addItems = (state = [],action)=>{
    switch (action.type) {
        case "ADDITEM": return[
            ...state,{
                id:++id,
                description:action.payload.description
            }
        ]
            
         break;
        case "DELITEM": 
        return state = state.filter((item)=>{
            return item.id !== action.payload.id
        })
            
         break;

         default: return state;
         break;
    }
}

export default addItems;