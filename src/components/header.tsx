import React from "react";

export const Header: React.FC = () => {
return (
<>
    <header id="header" className="header dark-background d-flex flex-column">
    <i className="header-toggle d-xl-none bi bi-list"></i>

    <div className="profile-img">
        <img
        src="assets/img/my-profile-img.jpg"
        alt="Profile"
        className="img-fluid rounded-circle"
        />
    </div>
    </header>
</>
);
};
