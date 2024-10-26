let auth0 = null;

const configureClient = async () => {
  auth0 = await createAuth0Client({
    domain: auth0Config.domain,
    client_id: auth0Config.clientId,
    redirect_uri: auth0Config.redirectUri,
    audience: auth0Config.audience,
    scope: auth0Config.scope
  });
};

const login = async () => {
  console.log('Login function called');
  try {
    await auth0.loginWithRedirect();
  } catch (error) {
    console.error('Login error:', error);
  }
};

const logout = () => {
  console.log('Logout function called');
  auth0.logout({
    returnTo: window.location.origin
  });
};

const isAuthenticated = async () => {
  return await auth0.isAuthenticated();
};

const handleRedirectCallback = async () => {
  console.log('Handling redirect callback');
  try {
    const result = await auth0.handleRedirectCallback();
    console.log('Redirect callback result:', result);
    window.history.replaceState({}, document.title, "/");
    return result;
  } catch (error) {
    console.error("Error handling redirect callback:", error);
    if (error.error_description) {
      console.error("Error description:", error.error_description);
    }
    if (error.stack) {
      console.error("Error stack:", error.stack);
    }
    throw error;
  }
};

window.onload = async () => {
  await configureClient();
  
  // If the user is returning to the app after authentication
  if (window.location.search.includes("code=") && window.location.search.includes("state=")) {
    try {
      // Process the login state
      await auth0.handleRedirectCallback();
      // Remove the query parameters
      window.history.replaceState({}, document.title, "/");
    } catch (error) {
      console.error("Error handling redirect callback:", error);
    }
  }

  const isAuthed = await isAuthenticated();
  console.log("Is authenticated:", isAuthed);
};

// Make sure these are accessible globally
window.login = login;
window.logout = logout;
window.isAuthenticated = isAuthenticated;
window.handleRedirectCallback = handleRedirectCallback;
