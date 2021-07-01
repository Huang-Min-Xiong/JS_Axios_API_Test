const api_url = 'https://reqres.in/api/users';

//Method: GET
axios
    .get(api_url)
    .then(function (res) {
        var infos = res.data.data;
        console.log(infos);
    })
    .catch(function (err) {
        console.log(err);
    })


//Method: POST
axios
    .post(api_url, {
        name: "Rock",
        job: "enginner"
    })
    .then(function (res) {
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    })
