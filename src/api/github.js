const getUserData = async (username) => {

    // Github API Link
    const githubAPI = `https://api.github.com/users/${username}`;

    // Sends a request to the Github API and gets
    // a response which contains full user data.
    await fetch(githubAPI)
    .then(response => response.json())
    .then(userdata => {
        console.log(userdata);
    });

}

const getUserList = async (username, numberOfRepositories) => {

    // Github API Link
    const githubAPI = `https://api.github.com/search/users?q=${username}+repos:%3E${numberOfRepositories}`;

    // Sends a request to the Github API and gets
    // a basic response with a list of profiles based on 
    // username and amount of repositories.
    await fetch(githubAPI)
    .then(response => response.json())
    .then(userlist => {
        console.log(userlist.items);
    });

}

module.exports = {
    getUserData: getUserData, 
    getUserList: getUserList
};