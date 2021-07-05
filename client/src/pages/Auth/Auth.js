import React, { useState } from 'react';
import { Container, Image } from "semantic-ui-react";
import iclone from "../../assets/img/i-clone.png";
import "./Auth.scss";

export default function Auth() {

    // indica si estamos mostrando el formulario de
    // login o el formulario de registro
    const [showLogin, setShowLogin] = useState(true);

    return (
        <Container fluid className="auth">
            <Image src={iclone} />
            <div className="container-form">
                { showLogin ? <p>Formulario de login</p> : <p>Formulario de registro</p> }
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
