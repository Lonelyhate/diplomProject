import React, {FC, useState} from 'react';
import "./ProfileLinks.scss";
import ProfileNavigation from "../../../models/ProfileNavigation/ProfileNavigation";
import {Link} from "react-router-dom";
import Auth from "../../Auth/Auth";
import cn from "classnames"

const ProfileLinks: FC = () => {
    const [isActiveProfile, setIsActiveProfile] = useState(false);

    const openProfile = (): void => {
        setIsActiveProfile(!isActiveProfile)
    }

    return (
        <div className="profile-links">
            <ul className="profile-links__list">
                <li className="profile-links__item">
                    <Link to={ProfileNavigation.Favorites.url!} className="profile-links__link">
                        <ProfileNavigation.Favorites.img size={24} />
                    </Link>
                </li>
                <li className="profile-links__item">
                    <button className="profile-links__button">
                        <ProfileNavigation.Search.img size={24} />
                    </button>
                </li>
                <li className="profile-links__item">
                    <button className="profile-links__button">
                        <ProfileNavigation.Cart.img size={24} />
                    </button>
                </li>
                <li className="profile-links__item">
                    <button onClick={openProfile} className="profile-links__button">
                        <ProfileNavigation.Profile.img size={24} />
                    </button>
                </li>
            </ul>
            <div className={cn("profile-links__profile", {
                active: isActiveProfile
            })}>
                <Auth openAuthInModal={isActiveProfile} />
            </div>
        </div>
    );
};

export default ProfileLinks;