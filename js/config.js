let rootPath = "https://mysite.itvarsity.org/api/ContactBook/"; //location of the server

let apiKey = checkApiKey();

function checkApiKey() {    // sends check if the user has a valid api key
    if (!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self");
    }
        return localStorage.getItem("apiKey");
    
    
}