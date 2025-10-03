// with dispatch function
// export const counter = (payload) => (dispatch)=>{
//     console.log(payload,"PAYLOAD...");
//     dispatch({type : 'INCREMENT'})

// }

//normal function
export const counter = (payload) => {
    console.log(payload,"PAYLOAD...");
    return {type : 'INCREMENT'}

}