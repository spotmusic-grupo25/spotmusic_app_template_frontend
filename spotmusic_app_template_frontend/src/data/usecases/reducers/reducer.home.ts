export const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "FETCH_HOME_SUCESS":
        return {
          ...state,
          token: action.payload,
        };
      case "START":
        return {
          ...state,
          loading: true,
        };
      case "STOP":
        return {
          ...state,
          loading: false,
        };
      default:
        throw new Error();
    }
  };
  