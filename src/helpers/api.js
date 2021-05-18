import Cookies from 'js-cookie' // tem baixar a depencia js-cookie --save
import qs from 'qs'; // tem q baixar a depencia qs --save

const BASEAPI = 'http://alunos.b7web.com.br:501';

// requisicao post
const apiFetchPost = async (url, body) =>{

    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }

    const res = await fetch(BASEAPI+url, {
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const json = await res.json();

    if(json.notallowed){
        window.location.href='/login';
        return;
    }

    return json;
}

//requisicao get
const apiFetchGET = async (url, body = []) =>{

    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }

    const res = await fetch(`${BASEAPI+url}?${qs.stringify(body)}`);

    const json = await res.json();

    if(json.notallowed){
        window.location.href='/login';
        return;
    }

    return json;
}

//
const api = { // requisitando a api para enviar a o email e a senha
    login:async (email, password) =>{
        const json = await apiFetchPost(
            '/user/signin', 
            {email, password}
        );
        return json;
    },

    register: async (name, email, password, stateloc) => {
        const json = await apiFetchPost(
            '/user/signup',
            {name, email, password, state: stateloc}// como o nome do campo é o mesmo nome da varial nao precisa fazer assim: name:name, email:email
        );

        return json;
    },

    getStates:async () => { // requisitando o api para puxar os estados
        const json = await apiFetchGET('/states');
        return json.states;
    },

    getCategories: async () => {
        const json = await apiFetchGET(
            '/categories'
        );

        return json.categories;
    },

    getAds: async (options) =>{
        const json = await apiFetchGET(
            '/ad/list',
            options
        );

        return json;
    },
    
    getAd: async (id, other = false) =>{
        const json = await apiFetchGET(
            '/ad/item',
            {id, other}
        );

        return json;
    }
}

export default () => api;