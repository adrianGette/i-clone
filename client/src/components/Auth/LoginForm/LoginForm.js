import React, { useState } from 'react';
import { Form, Button } from "semantic-ui-react";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useMutation } from '@apollo/client';
import { LOGIN } from "../../../gql/user";
import { setToken } from '../../../utils/token';
import "./LoginForm.scss";

export default function LoginForm() {

    const [ error, setError ] = useState("");

    const [ login ] = useMutation(LOGIN);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object({
            email: Yup.string().email("El email no es válido.").required("El email es obligatorio."),
            password: Yup.string().required("La contraseña es obligatoria."),
        }),
        onSubmit: async (formData) => {
            setError("");
            try {
                const {data} = await login({
                    variables: {
                        input: formData,
                    }
                });
                const { token } = data.login;
                setToken(token);
            } catch (error) {
                setError(error.message);
            }
        },
    });

    return (
        <Form className="login-form" onSubmit={formik.handleSubmit}>
            <h2>Entra para ver fotos y videos de tus amigos.</h2>
            <Form.Input 
                type="text"
                placeholder="Correo electrónico"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email && true}
            />

            <Form.Input 
                type="password"
                placeholder="Contraseña"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password && true}
            />

            <Button type="submit" className="btn-submit">
                Iniciar sesión
            </Button>

            {error && <p className="submit-error">{error}</p>}
        </Form>
    )
}


function initialValues() {
    return {
        email: "",
        password: "",
    };
}
