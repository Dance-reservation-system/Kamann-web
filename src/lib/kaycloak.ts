import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL || 'http://localhost:8080',
  realm: import.meta.env.VITE_KEYCLOAK_REALM || 'master',
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID || 'kamann-app',
};

const keycloak = new Keycloak(keycloakConfig);

// Flag to track if Keycloak has already been initialized
let isKeycloakInitCalled = false;

export default keycloak;

export const initKeycloak = () => {
  // Prevent multiple initialization calls
  if (isKeycloakInitCalled) {
    return Promise.resolve(keycloak.authenticated || false);
  }

  isKeycloakInitCalled = true;

  return keycloak.init({
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256',
  });
};

export const login = () => {
  return keycloak.login();
};

export const logout = () => {
  return keycloak.logout();
};

export const register = () => {
  return keycloak.register();
};

export const getToken = () => {
  return keycloak.token;
};

export const isAuthenticated = () => {
  return keycloak.authenticated;
};

export const getUserInfo = () => {
  return keycloak.tokenParsed;
};