import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../gql/user';
import UserNotFound from "../UserNotFound";
import imageNotFound from "../../assets/img/avatar.png";
import "./Profile.scss";

export default function Profile(props) {

    const { username } = props;

    const { data, loading, error } = useQuery(GET_USER, {
        variables: { username },
    });

    if(loading) return null;
    if(error) return <UserNotFound />;

    const { getUser } = data;
   
    console.log(getUser);

    return (
        <>
            <Grid className="profile">
                <Grid.Column width={5} className="profile__left">
                    <Image src={imageNotFound} avatar />
                </Grid.Column>

                <Grid.Column width={11} className="profile__right">
                    <div>HeaderProfile</div>
                    <div>Followers</div>
                    <div className="other">
                        <p className="name">{getUser.name}</p>
                        {getUser.website && (
                            <a href={getUser.website} className="website" target="_blank">
                                {getUser.website}
                            </a>
                        )}
                        {getUser.description && (
                            <p className="description">{getUser.description}</p>
                        )}
                    </div>
                </Grid.Column>
            </Grid>
        </>
    );
}
