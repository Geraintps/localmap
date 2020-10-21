
var signinWindow = null;
var signinTimer = null;
window.signInNotifier = new Notifier();

function usernameIfKnown() {
    return window.user && window.user.name || "";
}

function usernameOrSignIn() {
    return usernameIfKnown() || signin() || "";
}

function onClickSignIn() {
    if (g('consent').checked) signin();
}

// Called from signinDialog
function signin() {
    // Open a window and then poll to see when it's closed
    signinWindow = window.open(`sign-in.htm?v=${window.version}&project=${window.project.id}`,
        'signin', "width=600,height=750,left=200,top=100,toolbar=0,status=0");
    signinTimer = setInterval(function () {
        if (!signinWindow || signinWindow.closed) {
            clearInterval(signinTimer);
            checkSignin(null); 
        }
    }, 1000);
}


/**
 * Check the user's credentials with Azure auth.
 * Assume already or previously logged in.
 * @param {fn(name)} onGot Callback when found name
 * @param {string} id email or group code/name
 */
function checkSignin(onGot, id) {
    getFile("https://deep-map.azurewebsites.net/api/checkUser", function (response) {
        if (response && response.entries && response.entries.length > 0) {
            window.user = User.FromTableRow(response.entries[0]);

            setUserName(window.user);
            if (window.user.isContributor) {
                openSignedInControls();
            }
            if (onGot) onGot(window.user);
            window.signInNotifier.Notify();
        }
    });
}

function openSignedInControls(yes = true) {
    let display = yes ? "inline-block" : "none";
    show("addFileButton", display);
    show("addPlaceButton", display);
    g("target").style.visibility = yes ? "visible" : "hidden";
}

function setLengthColour(jqtext) {
    jqtext.css("background-color", (jqtext.html().length > 64000) ? "pink" : "white");
}

function setUserName(user) {
    if (user) {
        text("usernamespan", user.name);
        hide("signInButtonTop");
        //show("signOutButton", "inline-block");
        show("settingsButton", "inline-block");
        window.isSignedIn = true;
        appInsights.setAuthenticatedUserContext(user.name.replace(/[' &]+/g, "_"));
    }
    else {
        appInsights.clearAuthenticatedUserContext();
        window.isSignedIn = false;
        html("usernamespan", "");
        show("signInButtonTop", "inline");
        hide("settingsButton");
        //hide("signOutButton");
        show("usernamediv", "inline-block");
    }
}

function signOut() {
    window.user = null;
    setUserName(null);
    openSignedInControls(false);
    getFile("https://deep-map.azurewebsites.net/.auth/logout", null);
    appInsights.trackEvent("sign out");
    window.signInNotifier.Notify();
}

function onSettingsButton() {
    if (window.user) {
        show("configDialog");
        html("configHeader", `<h2>${window.user.fullName}</h2><p>${window.user.roleOnProject()}</p>`);
        html("config",
            "<p>Display name: <input id='displayNameInput' type='text' size='30' onchange='changeDisplayName()' />");
        g("displayNameInput").value = window.user.displayName;
        g("exportLink").href = "export.html?project=" + window.project.id;
        show("projectLink", window.user.isAdmin ? "block" : "none");
    }
}

function changeDisplayName() {
    let newName = g("displayNameInput").value.replace(/[^ a-zA-Z0-9&-,'+()]+/g, " ");
    if (newName != window.user.displayName) {
        window.user.displayName = newName;
        getFile("https://deep-map.azurewebsites.net/api/checkUser?display="
             + encodeURI(newName, " ").trim(),
            () => text("usernamespan", window.user.name));
    }
}