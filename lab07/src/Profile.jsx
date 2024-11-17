import React from "react";
import "./Profile.css";

export default function Profile({ name, picture }) {
    return (
        <section className="profile">
            <h3>{name}</h3>
            <img src={picture} alt={`${name}'s profile`} />
        </section>
    );
}
