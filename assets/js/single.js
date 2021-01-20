
var issueContainerEl = document.querySelector('#issues-container');


var getRepoIssues = function (repo) {
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";


    fetch(apiUrl).then(function (response) {
        // successful response
        if (response.ok) {
            response.json().then(function (data) {
                displayIssues(data);
            })
        } else {
            alert('There was a problem with your request')
        }

    });

}

getRepoIssues("facebook/react")

var displayIssues = function (issues) {
    

    for(var i = 0; i < issues.length; i++) {
        
        // create a link element to take users to the issue on github
        var issuesEl = document.createElement('a');
        issuesEl.classList = "list-item flex-row justify-space-between align-center";
        issuesEl.setAttribute('href', issues[i].html_url);
        issuesEl.setAttribute("target", "_blank")
        

        // create span to hold issue title
        var titleEl = document.createElement('span');
        titleEl.textContent = issues[i].title;
        
        // append to container
        issuesEl.appendChild(titleEl)

        //create element type

        var typeEl = document.createElement('span');

        // check is issue is an actual issue or a pull request
        if (issues[i].pull_request) {
            typeEl.textContent =('Pull Request');
        }else {
            typeEl.textContent = ('Issue')
        }
        // append to container
        issuesEl.appendChild(typeEl)
        issueContainerEl.appendChild(issuesEl);
    }
};