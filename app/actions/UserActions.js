import AppStore from '../stores/AppStore';
import { authenticate, unAuthenticate } from '../services/AuthService';

export const signIn = (email, password) => {
  authenticate(email, password).then(() => {
    AppStore.user.isLoggedIn.set(true);
  });
};

export const signOut = () => {
  unAuthenticate().then(() => {
    AppStore.user.isLoggedIn.set(false);
  });
};

export const setUser = (user) => {
  user.getToken().then(function(data) {
    AppStore.user.login.set(user.email);
    AppStore.user.token.set(data);
    AppStore.user.isLoggedIn.set(true);
  });
};

export const clearUser = () => {
  AppStore.user.login.set(null);
  AppStore.user.isLoggedIn.set(false);
};
