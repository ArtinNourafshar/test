
(function app (){
    const USER_LIST = [
        { id: 1, userName: 'artin', pass: '1387' },
        { id: 2, userName: 'mmd', pass: 'OWO' },
        { id: 3, userName: 'MehrdadKahbazi', pass: 'ostad' },
        { id: 4, userName: 'madrak mikham :)', pass: 'pleas' },
        { id: 5, userName: 'ahmad', pass: '6666' },
        { id: 6, userName: 'qolam reza king vahshi tanha single', pass: 'king' },
        { id: 6, userName: 'mahdi', pass: '2025' },
    ];
    const alert = document.getElementById("alert");
    const alertValid = document.getElementById("alert-valid");
    const username = document.getElementById('username');
    const pass = document.getElementById('pass');
    const handleSubmit = (e) => {
        e.preventDefault();


        
        const user = USER_LIST.filter( item => item.userName.toLowerCase() === username.value.toLowerCase().trim());
        if(user.length && pass.value === user[0].pass){
            console.log('Welcome to Terahood 😎');

  
            localStorage.setItem('user-name', JSON.stringify(user[0].userName));
            alert.classList.add("d-none");
            alertValid.classList.remove("d-none");
            setTimeout(() => {

                navigation.navigate('./index.html')            
            },1200)
        }else{
            console.log('Maybe your password or username incorrect');
            alert.classList.remove("d-none");
            username.value = '';
            pass.value = '';
            
        }
    }

    
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click',handleSubmit)


    // bootstrap alert 


    
})();
