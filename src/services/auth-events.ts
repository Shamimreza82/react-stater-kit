export const AUTH_UNAUTHORIZED_EVENT = "auth:unauthorized";

export const emitUnauthorized = () => {
  window.dispatchEvent(new Event(AUTH_UNAUTHORIZED_EVENT));
};

