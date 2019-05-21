export default function Reducer(state, action) {
  switch (action.type) {
    case "popularImages": {
      return {
        ...state,
        popular: action.payload
      };
    }

    case "latestImages": {
      return {
        ...state,
        latest: action.payload
      };
    }
    case "searchedImages": {
      return {
        ...state,
        images: action.payload
      };
    }
    case "selectedImage": {
      return {
        ...state,
        selectedImage: action.payload
      };
    }
    case "addToFavorites": {
      return {
        ...state,
        faves: action.payload
      };
    }
    case "removeFromFavorites": {
      return {
        ...state,
        faves: state.faves.filter(fave => fave.id !== action.payload)
      };
    }

    default: {
      return state;
    }
  }
}
