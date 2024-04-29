$(document).ready(function(){

    const endpoint = 'https://api.github.com/users/julia-slvbrg';

    fetch(endpoint)
        .then(function(res){
            return res.json();           
        })
        .then(function(json){
            const name = json.name;
            const login = json.login;
            const avatarUrl = json.avatar_url;
            const repos =  json.public_repos;
            const followers = json.followers;
            const following = json.following;

            $('#name').text(name);
            $('#username').text(login);
            $('#avatar').attr('src', avatarUrl);
            $('#repo').text(repos);
            $('#followers').text(followers);
            $('#following').text(following);
        })
        .catch(function(error){
            alert('Ocorreu um erro e não pudemos carregar as informações.');
        })
})