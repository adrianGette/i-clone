import React from 'react';
import { Container, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/i-clone.png";
import "./Header.scss";

export default function Header() {
    return (
        <div className="header">
            <Container>
                <Grid>
                    <Grid.Column width={3} className="header__logo">
                        <Link to="/">
                            <Image src={Logo} alt="Ig-clone" />
                        </Link>
                        
                    </Grid.Column>
                    <Grid.Column width={10} className="header__logo">
                        <p>Buscador</p>
                    </Grid.Column>
                    <Grid.Column width={3} className="header__logo">
                        <p>Opciones</p>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}
