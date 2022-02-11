var getRepoIssues = function(repo) {
    console.log(repo);
    //the issues?direction=asc reverses order to return older issues first
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    fetch(apiUrl).then(function(response) {
        // request was successful
        if (response.ok) {
          response.json().then(function(data) {
            console.log(data);
          });
        }
        else {
          alert("There was a problem with your request!");
        }
      });
};

getRepoIssues("facebook/react");