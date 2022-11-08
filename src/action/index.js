export const add_Item = (data) => {
    return{
        type:"ADD",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}

export const delete_Item = (id) => {
    return{
        type:"DELETE",
        id
    }
}

export const remove_All = () => {
    return{
        type:"REMOVE_ALL"
    }
}