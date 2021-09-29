export const getUserName = (state) => state.auth.user.name;
export const getTokenState = (state) => {
    return state.auth.isLogin
};
export const getErrorMessage = (state) => state.auth.error;
