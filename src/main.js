async function logout() {
    localStorage.clear();
    location.reload()
}

async function pass_in_queue() {
    const token = localStorage.getItem('access_token')
    let current_subject = document.getElementById('current_subject').textContent
    if (current_subject != "") {
          payload = {
          'access_token': token,
          'subject': subject
        }
        let user = await fetch('http://127.0.0.1:5000/delete_from_queue', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(payload)
        })
        let result = await user.json()
        alert(result['info'])
    }
    else {
        alert('Сначала выберите предмет!')
    }
}



async function delete_from_queue() {
    const token = localStorage.getItem('access_token')
    let current_subject = document.getElementById('current_subject').textContent
    if (current_subject != "") {
        payload = {
            'access_token': token,
            'subject': subject
        }
        let user = await fetch('http://127.0.0.1:5000/delete_from_queue', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(payload)
        })
        let result = await user.json()
        alert(result['info'])
    }
    else {
        alert('Сначала выберите предмет!')
    }
}

async function add_in_queue() {
    const token = localStorage.getItem('access_token')
    let current_subject = document.getElementById('current_subject').textContent
    if (current_subject != "") {
        payload = {
            'access_token': token,
            'subject': subject
        }
        let user = await fetch('http://127.0.0.1:5000/add_in_queue', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(payload)
        })
        let result = await user.json()
        alert(result['info'])
    }
    else {
        alert('Сначала выберите предмет!')
    }
}

async function timetable_handler1() {
    subject = document.getElementById('subject1').textContent
    current_subject = document.getElementById('current_subject')
    current_subject.innerHTML = subject
    get_queue(subject)
}

async function timetable_handler2() {
    subject = document.getElementById('subject2').textContent
    current_subject = document.getElementById('current_subject')
    current_subject.innerHTML = subject
    get_queue(subject)
} 

async function timetable_handler3() {
    subject = document.getElementById('subject3').textContent
    current_subject = document.getElementById('current_subject')
    current_subject.innerHTML = subject
    get_queue(subject)
} 

async function timetable_handler4() {
    subject = document.getElementById('subject4').textContent
    current_subject = document.getElementById('current_subject')
    current_subject.innerHTML = subject
    get_queue(subject)
} 

async function get_queue(subject) {
    const token = localStorage.getItem('access_token')
    alert(subject)
    payload = {
        'access_token': token,
        'subject': subject
    }
    let user = await fetch('http://127.0.0.1:5000/get_queue', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(payload)
    })
    let result = await user.json()

    for (let i = 1; i <= result.length; i++) {
        const element = document.getElementById(`queue${i}`);
        element.textContent = result[i - 1];

    }
}

async function render() {
    const token = localStorage.getItem('access_token')
    if (token == 'undefined' || !token) {
        alert('Сначала вы должны авторизоваться!')
        window.location.replace('C:/Users/zevso/Desktop/Queue/new/frontend/login/login.html')
    }
    else {
        payload = {
            'access_token': token
        }
        let user = await fetch('http://127.0.0.1:5000/index', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(payload)
        })
        let result = await user.json()


        if (result['info'] == 'Token is invalid') {
            window.location.replace('C:/Users/zevso/Desktop/Queue/new/frontend/login/login.html')
        }
        else {
            /*alert('Вы успешно вошли!')*/
        }
    }
}

async function page() {
    const token = localStorage.getItem('access_token')
    let name_label = document.getElementById('name')
    

    payload = {
        'access_token': token,
    }

    let req = await fetch('http://127.0.0.1:5000/render', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(payload)
    })
    let result = await req.json()
    let name = result['name']
    name_label.innerHTML = name

    for (let i = 1; i <= result['subjects'].length; i++) {
        const element = document.getElementById(`subject${i}`);
        element.textContent = result['subjects'][i - 1]['name'];
        
    }

    for (let i = 1; i <= result['subjects'].length; i++) {
        const element = document.getElementById(`teacher${i}`);
        element.textContent = result['subjects'][i - 1]['teacher'];

    }

    //alert(result['name'])*   font-size: var(--font-size1);
}
    
