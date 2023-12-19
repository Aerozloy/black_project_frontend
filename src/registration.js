async function register() {
    let name = document.getElementsByName('name')[0].value
    let login = document.getElementsByName('login')[0].value
    let password = document.getElementsByName('password')[0].value

    let user = {
        Name: name,
        Login: login,
        Password: password
    }

    let response = await fetch('http://127.0.0.1:5000/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })

    let result = await response.json()

    console.log(result)
    if (result['login'] == 'False') {
        alert(result['error'])
    }
    else {
        alert('Вы успешно зарегистрировались!')
        window.location.replace('C:/Users/zevso/Desktop/Queue/new/frontend/login/index2.html')
    }
}
async function redirect_to_login() {
    window.location.replace('C:/Users/zevso/Desktop/Queue/new/frontend/login/index2.html')
}
