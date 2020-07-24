const initialState = {
  bands: [],
  genres: [],
  albums: [],
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
    
    default:
      return state;
  }
};

export default bands;
