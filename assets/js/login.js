

const submitForm = $('#submit-form'),
      email = $('#email'),
      password = $('#password');
      logout = $('#logout')

async function useAuth(URL, user){
    try{
        const req = await fetch(`${URL}/auth/login`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        const res = await req.json()

        if(req.status === 200){
            localStorage.setItem('token', res.token)
        }
        if(req.status !== 200){
            alert('Wrong')
        }
        if(localStorage.getItem('token')){
                location.href = '../../index.html'
        }
    }
    catch(err){
        console.error(err.message);
    }
}


submitForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const user = {
        username: email.value,
        password: password.value
    }

    if(user.username.length === 0 && user.email.length === 0){
        alert('Fill the form!')
    }else{

    }
    console.log(API);
    console.log(user);
    useAuth(API, user)
})

logout.addEventListener('click', ()=>{
    localStorage.removeItem('token')
})
