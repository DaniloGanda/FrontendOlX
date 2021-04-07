import Cookies from 'js-cookie'

export const isLogged = () =>{
    let token = Cookies.get('token'); // pegando o token
    return (token)? true : false; // se o token existir true se nao false
}

export const doLogin = (token, rememberPassword = false) => { // fazendo login;
    if(rememberPassword){
        Cookies.set('token', token, {expires:999});
    }else{
        Cookies.set('token', token);
    }
}

export const doLogout = () =>{
    Cookies.remove('token');
}