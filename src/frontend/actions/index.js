import axios from 'axios';

export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});
export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});
export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});
export const setError = (payload) => ({
  type: 'SET_ERROR',
  payload,
});

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});
export const getVideoSource = (payload) => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});
export const registerUser = (payload, redirectUrl) => {
  return (dispatch) => {
    axios.post('/auth/sign-up', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((err) => dispatch(setError(err)));
  };
};
export const loginUser = ({ email, password, rememberMe }, redirectUrl) => {
  return (dispatch) => {
    axios({
      url: '/auth/sign-in',
      method: 'post',
      auth: {
        username: email,
        password,
      },
      data: {
        rememberMe,
      },
    })
      .then(({ data }) => {
        document.cookie = `token=${data.token}`;
        document.cookie = `email=${data.email}`;
        document.cookie = `name=${data.name}`;
        document.cookie = `id=${data.id}`;
        const user = {
          email: data.email,
          name: data.name,
          id: data.id,
        };
        dispatch(loginRequest(user));
      })
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((err) => dispatch(setError(err)));
  };
};
export const addFavorite = (payload, movieData) => {
  return (dispatch) => {
    axios.post('/user-movies', payload)
      .then(() => {
        dispatch(setFavorite(movieData));
      })
      .catch((err) => dispatch(setError(err)));
  };
};
export const delFavorite = (payload) => {
  const { movieId, userId } = payload;
  return (dispatch) => {
    axios({
      url: `/user-movies/${movieId}`,
      data: {
        userId,
      },
      method: 'delete',
    })
      .then(() => {
        dispatch(deleteFavorite(movieId));
      })
      .catch((err) => dispatch(setError(err)));
  };
};
export const logoutUser = (payload) => {
  return (dispatch) => {
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    document.cookie = 'token=';
    dispatch(logoutRequest(payload));
  };
};
export const loginUserTwitter = (redirectUrl) => {
  window.location.href = '/auth/twitter';
};
export const loginUserGoogle = (redirectUrl) => {
  window.location.href = '/auth/google';
};
