import "./Profile.css";
 import React from "react";
 import "./Profile.css";

export default function Profile({ name }) {
    return (
        <section className="profile">
            <h3>{name}</h3>
        </section>
    );
}
