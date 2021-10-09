async function postLogin()
{

    let data = {
        username: document.getElementById("user").value,
        password: document.getElementById("pass").value
    }
    console.log(data)
    let response = await fetch('https://08ff-181-141-8-51.ngrok.io/api/obtain-auth-token/',
        {method:'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }})

        console.log(response)
        let dataObj = await response.json()
        login(dataObj, data)
}


function login(dataRes, dataUser) {
    console.log(dataRes)
    if(dataRes.token){
        localStorage.setItem("token", dataRes.token)
        localStorage.setItem("User", dataUser.username)

        window.location.href = "menu/menu.html"
    }

}
