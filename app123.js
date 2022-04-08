const LogPass = document.getElementById('Press')
LogPass.onclick = () => {
    let log = document.getElementById('Login').value
    let pass = document.getElementById('password').value

    if (log == 'Vl.pehov@gmail.com' && pass == '123456')
        alert('Все верно!')
    else
        alert('Не верный логин или пароль')
}