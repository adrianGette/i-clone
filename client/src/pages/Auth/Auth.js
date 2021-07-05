import React, { useState } from 'react';
import { Container, Image } from "semantic-ui-react";
import RegisterForm from '../../components/Auth/RegisterForm/RegisterForm';
import iclone from "../../assets/img/i-clone.png";
import "./Auth.scss";

export default function Auth() {

    // indica si estamos mostrando el formulario de
    // login o el formulario de registro
    const [showLogin, setShowLogin] = useState(false);

    return (
        <Container fluid className="auth">
            <Image src={iclone} />
            <div className="container-form">
                { showLogin ? <p>Formulario de login</p> : <RegisterForm 
                                                                setShowLogin={setShowLogin}
                                                            /> }
            </div>

            <div className="change-form">
                <p>
                    {showLogin ? (
                        <>
                            ¿No tenés cuenta?
                            <span
                                onClick={ () => setShowLogin(!showLogin) }
                            >Registrate</span>
                        </>
                    ) : (
                        <>
                            ¡Entrá con tu cuenta!
                            <span
                                onClick={ () => setShowLogin(!showLogin) }
                            >Iniciar sesión</span>
                        </>
                    )}
                </p>
            </div>
        </Container>
    )
}
