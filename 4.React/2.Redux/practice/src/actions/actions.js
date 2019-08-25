import {FETCH_USERS, CHANGE_BACKGROUND} from './types';


//    Thunk for Async
export const fetchPosts = () => dispatch =>{

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            //   Send Data to Root Reducer
            .then(posts => dispatch({
                type: FETCH_USERS,
                payload: posts
            }));
}


//   Normal Action

export const changeBackground = (background) => {
    if(background === true){
        return {
            type: CHANGE_BACKGROUND,
            payload: !background
        }
    }
    else{
        return {
            type: CHANGE_BACKGROUND,
            payload: !background
        }
    }
}

