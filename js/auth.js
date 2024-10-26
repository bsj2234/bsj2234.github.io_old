let auth0 = null;
let userProfile = null;

const configureClient = async () => {
  auth0 = await createAuth0Client({
    domain: auth0Config.domain,
    client_id: auth0Config.clientId,
    redirect_uri: auth0Config.redirectUri,
    audience: auth0Config.audience,
    scope: auth0Config.scope,
    useRefreshTokens: auth0Config.useRefreshTokens,
    cacheLocation: auth0Config.cacheLocation
  });
};

const login = async () => {
  console.log('Login function called');
  try {
    await auth0.loginWithRedirect({
      redirect_uri: auth0Config.redirectUri
    });
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

const getUserProfile = async () => {
  if (!userProfile) {
    try {
      userProfile = await auth0.getUser();
    } catch (error) {
      console.error("Error getting user profile:", error);
    }
  }
  return userProfile;
};

const handleRedirectCallback = async () => {
  console.log('Handling redirect callback');
  try {
    const result = await auth0.handleRedirectCallback();
    console.log('Redirect callback result:', result);
    userProfile = await auth0.getUser();
    console.log('User profile:', userProfile);
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
  
  if (window.location.search.includes("code=") && window.location.search.includes("state=")) {
    try {
      await handleRedirectCallback();
    } catch (error) {
      console.error('Error handling redirect callback:', error);
    }
  }

  const isAuthed = await isAuthenticated();
  console.log("Is authenticated:", isAuthed);
  if (isAuthed) {
    userProfile = await getUserProfile();
    console.log("User profile:", userProfile);
    updateUIWithUserInfo(userProfile);
  }
};

function updateUIWithUserInfo(user) {
  const userInfoElement = document.getElementById('user-info');
  if (userInfoElement) {
    userInfoElement.innerHTML = `
      <img src="${user.picture}" alt="${user.name}" style="width:50px; border-radius:50%;">
      <p>Welcome, ${user.name}!</p>
    `;
  }
}

// Make sure these are accessible globally
window.login = login;
window.logout = logout;
window.isAuthenticated = isAuthenticated;
window.handleRedirectCallback = handleRedirectCallback;
window.getUserProfile = getUserProfile;
