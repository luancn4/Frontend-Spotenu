const initialState = {
  bands: [],
  genres: [],
};

const bands = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_BANDS": {
      return { ...state, bands: action.payload.band };
    }

    case "SET_ALL_GENRES": {
      return { ...state, genres: action.payload.genre };
    }
    default:
      return state;
  }
};

export default bands;
