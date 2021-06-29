const getUsers = () => {
    let url = 'https://randomuser.me/api?results=10';
  
    fetch(url)
        .then(res => res.json())
        .then(function(json) {
            let output = ''
            const users =  json.results
            users.forEach(user => {
                output += "<p>"+ user.name.title + ". " + user.name.first + " " + user.name.last +"<p/>"
            });
            console.log(output)

            document.getElementById("user-list").innerHTML = output;
        })
        .catch(function(error) {
            console.log(error);
            document.getElementById("error").innerHTML = "There was an error fetching the users"
        });
  }
  