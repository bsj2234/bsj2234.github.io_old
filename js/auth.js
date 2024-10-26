let auth0 = null;

const configureClient = async () => {
  auth0 = await createAuth0Client({
    domain: auth0Config.domain,
    client_id: auth0Config.clientId,
    redirect_uri: auth0Config.redirectUri
  });
};

const login = async () => {
  await auth0.loginWithRedirect();
};

const logout = () => {
  auth0.logout({
    returnTo: window.location.origin
  });
};

const isAuthenticated = async () => {
  return await auth0.isAuthenticated();
};

const handleRedirectCallback = async () => {
  try {
    await auth0.handleRedirectCallback();
    window.history.replaceState({}, document.title, "/");
  } catch (error) {
    console.error("Error handling redirect callback:", error);
  }
};

window.onload = async () => {
  await configureClient();
  await handleRedirectCallback();
  const isAuthed = await isAuthenticated();
  
  if (isAuthed) {
    console.log("User is authenticated");
    // Update UI for authenticated user
  } else {
    console.log("User is not authenticated");
    // Update UI for non-authenticated user
  }
};

// Make sure login and logout are accessible globally
window.login = login;
window.logout = logout;

window.handleRedirectCallback = handleRedirectCallback;
