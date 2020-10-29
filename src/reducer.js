export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  // token: 'BQAvk_UWKGx59LIzWEpwewbZ6jd8xDBulGYg4CvTzQL0cUAKE6f6njqzQQFvHYkxJSCGkxt7zoTNL78iEmHuxiGCvqlucwpkbOpNy9th2c8fWPltcXoiNF4eeBY1gix3wwI51r-DPPesE04Hoockap__7wJ2WtdzARft70VL93u3z-5A'
}

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      }
    
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }

    default:
      return state;
  }
}

export default reducer;