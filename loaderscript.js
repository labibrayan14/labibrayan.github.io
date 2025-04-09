// Function to dynamically set cookies from JSON data
function setCookiesFromJSON(cookieData) {
    cookieData.forEach(cookie => {
        const cookieAttributes = [
            `name=${cookie.name}`,
            `value=${cookie.value}`,
            `domain=${cookie.domain}`,
            `path=${cookie.path || '/'}`,
            `secure=${cookie.secure ? 'true' : 'false'}`,
            `httpOnly=${cookie.httpOnly ? 'true' : 'false'}`,
            `sameSite=${cookie.sameSite || 'Lax'}`,
            `expires=${cookie.expirationDate ? new Date(cookie.expirationDate * 1000).toUTCString() : ''}`,
        ];

        // Remove any empty or unnecessary attributes (like expires if session is true)
        const cookieString = cookieAttributes.filter(attr => attr).join('; ');

        // Set the cookie in the browser
        document.cookie = cookieString;
    });
}
