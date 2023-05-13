let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";

document.getElementById("submitApiKey").addEventListener("click", setApiKey);

function setApiKey(e) {
    e.preventDefault();

    apiKey = document.getElementById("apiKey").value;

    fetch(rootPath + "controller/api-key/?apiKey=" + apiKey)
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            if (data == "1"){
                localStorage.setItem("apiKey", apiKey);
                window.open("index.html", "_self");
            } else {
                alert(data + "Invalid API key entered!");
            }
        })

        
}