import React from 'react';
import { Icon, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import ImageNotFound from "../../../assets/img/avatar.png";
import "./RightHeader.scss";

export default function RightHeader() {
    return (
        <div className="right-header">
            <Link to="/">
                <Icon name="home" />
            </Link>
            <Icon name="plus" />
            <Link to="/">
                <Image src={ImageNotFound} avatar />
            </Link>
        </div>
    )
}
