import jsonplaceholder from "../apis/jsonPlaceholder";
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
 await dispatch(fetchPosts());

 const userIds =_.uniq(_.map(getState().posts, 'userId'))

 userIds.forEach(id => dispatch(fetchUser(id)))
}

export const fetchPosts = () => {
  return async  (dispatch, getState) => {
    const response = await jsonplaceholder.get("/posts");

    dispatch({ type: 'FETCH_POSTS', payload: response.data }) //

// dispatch === return { type: "FETCH_POSTS", payload: response};
  };
};

export const fetchUser = (id) => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${id}`)

  dispatch({ type: 'FETCH_USER', payload: response.data })
};



 


// const _fetchUser = _.memoize( async (id, dispatch) => {
//   const response = await jsonplaceholder.get(`/users/${id}`)

//   dispatch({ type: 'FETCH_USER', payload: response.data })
// });



