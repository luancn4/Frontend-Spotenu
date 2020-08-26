const initialState = {
  bands: [],
  genres: [],
  albums: [],
  user: [],
  musics: []
};

const bands = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_BANDS": {
      return { ...state, bands: action.payload.band };
    }

    case "SET_ALL_GENRES": {
      return { ...state, genres: action.payload.genre };
    }

    case "SET_BAND_ALBUMS": {
      return { ...state, albums: action.payload.album };
    }

    case "SET_USER_INFO": {
      return { ...state, user: action.payload.userInfo };
    }

    case "SET_MUSICS": {
      return {
        ...state, musics: action.payload.musics
      }
    }
    
    default:
      return state;
  }
};

export default bands;
