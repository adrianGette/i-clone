import React from 'react';
import { Form, Button } from "semantic-ui-react";
import { useFormik }  from "formik";
import * as Yup from "yup";
import "./RegisterForm.scss";

export default function RegisterForm(props) {

    const { setShowLogin } = props;

    const formik = useFormik({
        initialValues: initialValue(),
        validationSchema: Yup.object({
            name: Yup.string().required("Tu nombre es obligatorio."),
            username: Yup.string().matches(/^[a-zA-Z0-9-]*$/, "El nombre de usuario no puede tener espacios").required("El nombre de usuario es obligatorio."),
            email: Yup.string().email("El email no es válido").required("El email es obligatorio."),
            password: Yup.string().required("La contraseña es obligatoria.").oneOf([Yup.ref("repeatPassword")], "Las contraseñas no son iguales."),
            repeatPassword: Yup.string().required("La contraseña es obligatoria.").oneOf([Yup.ref("password")], "Las contraseñas no son iguales."),
        }),
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
                    // value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.errors.name && true}
                />

                <Form.Input 
                    type="text"
                    placeholder="Nombre de usuario"
                    name="username"
                    // value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.errors.username && true}
                />

                <Form.Input 
                    type="text"
                    placeholder="Correo electrónico"
                    name="email"
                    // value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email && true}
                />

                <Form.Input 
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    // value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password && true}
                />

                <Form.Input 
                    type="password"
                    placeholder="Repetir contraseña"
                    name="repeatPassword"
                    // value={formik.values.repeatPassword}
                    onChange={formik.handleChange}
                    error={formik.errors.repeatPassword && true}
                />

                <Button type="submit" className="btn-submit">Registrarme</Button>
                {/* <Button type="button" onClick={formik.handleReset} className="btn-submit">Reiniciar Formulario</Button> */}
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
