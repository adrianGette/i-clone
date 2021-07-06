import React from 'react';
import { Form, Button } from "semantic-ui-react";
import { useFormik }  from "formik";
import "./RegisterForm.scss";

export default function RegisterForm(props) {

    const { setShowLogin } = props;

    const formik = useFormik({
        initialValues: initialValue(),
        validationSchema: null,
        onSubmit: (formValue) => {
            console.log("Formulario enviado.");
            console.log(formValue);
        },
    });

    return (
        <>
            <h2 className="register-form-title">Registrate para ver fotos y videos de tus amigos</h2>

            <Form className="register-form" onSubmit={formik.handleSubmit}>
                <Form.Input 
                    type="text"
                    placeholder="Nombre y Apellido"
                    name="name"
                    onChange={formik.handleChange}
                />

                <Form.Input 
                    type="text"
                    placeholder="Nombre de usuario"
                    name="username"
                    onChange={formik.handleChange}
                />

                <Form.Input 
                    type="text"
                    placeholder="Correo electrónico"
                    name="email"
                    onChange={formik.handleChange}
                />

                <Form.Input 
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    onChange={formik.handleChange}
                />

                <Form.Input 
                    type="password"
                    placeholder="Repetir contraseña"
                    name="repeatPassword"
                    onChange={formik.handleChange}
                />

                <Button type="submit" className="btn-submit">Registrarme</Button>
                <p>Al registrarte, aceptas nuestras Condiciones, la Política de datos y la Política de cookies.</p>
            </Form>
        </>
    );
}


function initialValue() {
    return {
        name: "",
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
    };
}
