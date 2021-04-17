import React from 'react';
import {HeaderArea} from './styled';
import {Link, useHistory} from 'react-router-dom';
import {isLogged, doLogout} from '../../../helpers/AuthHandler';

const Header = () =>{
    let logged = isLogged();
    const history = useHistory();
    const handleLogout = () =>{
        doLogout();
        window.location.href='/';
    }

    return(
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo-1">L</span>
                        <span className="logo-2">o</span>
                        <span className="logo-3">g</span>
                        <span className="logo-2">o</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {
                            logged && // se tiver logado
                            <>
                                <li>
                                    <Link to="/minha-conta">Minha Conta</Link>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>Sair</button>
                                </li>
                                <li>
                                    <Link to="/poste-um-anuncio" className="button">Poste um anúncio</Link>
                                </li>
                            </>
                        }

                        {
                            !logged && // se nao tiver logado
                            <>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/cadastrar">Cadastrar</Link>
                                </li>
                                <li>
                                    <Link to="/login" className="button">Poste um anúncio</Link>
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;