import { UPDATE_POSTS } from './index';

export const fetchMediumPosts = () => dispatch => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@traeger.winn').then(result => result.json()).then(json => {
        dispatch({
            type: UPDATE_POSTS,
            payload: {
                posts: json.items
            }
        })
    })
}