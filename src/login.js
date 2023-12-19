async function login() {
    let log = document.getElementsByName('login')[0].value
    let pwd = document.getElementsByName('password')[0].value
    let user = {
        login: log,
        password: pwd
    }

    let response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })

    let result = await response.json()

    console.log(result)


    if (result['login'] == 'True') {
        alert('Вы успешно вошли!')
        let token = result['access_token']
        console.log(token)
        localStorage.setItem('access_token', token);
        window.location.replace('C:/Users/zevso/Desktop/Queue/new/frontend/main_page/index.html')
    }
    else {
        alert('Неправильный логин или пароль!')
    }
}
async function redirect_to_registration() {
    window.location.replace('C:/Users/zevso/Desktop/Queue/new/frontend/reg/index.html')
}
