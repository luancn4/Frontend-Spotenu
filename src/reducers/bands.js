const initialState = {
  bands: [],
};

const bands = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_BANDS": {
      return { ...state, bands: action.payload.band };
    }

    default:
      return state;
  }
};

export default bands;
