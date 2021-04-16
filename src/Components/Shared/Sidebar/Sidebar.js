import {
    faClipboardList,
    faCommentDots,
    faPlusCircle,
    faShoppingCart,
    faTasks,
    faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    const email = sessionStorage.getItem("email");
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/checkIfAdmin?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]) {
                    setIsAdmin(true);
                }
            });
    }, [email]);

    console.log(isAdmin);
    return (
        <div className="sidebarContainer">
            <h3 className="mb-5">Zamzam International</h3>
            <hr style={{ color: "white" }} />
            <Link to="/dashboard/book">
                <div className="dashboardList">
                    <FontAwesomeIcon
                        className="sidebarIcon"
                        icon={faShoppingCart}
                    />{" "}
                    <h5>Book A Visa</h5>
                </div>
            </Link>
            <Link to="/dashboard/bookings">
                {" "}
                <div
                    className="dashboardList"
                    onClick={() => window.location.pathname === "/"}
                >
                    <FontAwesomeIcon
                        className="sidebarIcon"
                        icon={faClipboardList}
                    />
                    <h5>Your Booking list</h5>
                </div>
            </Link>
            <Link to="/dashboard/giveReview">
                <div className="dashboardList">
                    <FontAwesomeIcon
                        className="sidebarIcon"
                        icon={faCommentDots}
                    />
                    <h5>Give a Review</h5>
                </div>
            </Link>
            {isAdmin && (
                <Link to="/dashboard/addService">
                    {" "}
                    <div className="dashboardList">
                        <FontAwesomeIcon
                            className="sidebarIcon"
                            icon={faPlusCircle}
                        />
                        <h5>Add a Service</h5>
                    </div>
                </Link>
            )}
            {isAdmin && (
                <Link to="/dashboard/makeAdmin">
                    <div className="dashboardList">
                        <FontAwesomeIcon
                            className="sidebarIcon"
                            icon={faUserShield}
                        />
                        <h5>Make an Admin</h5>
                    </div>
                </Link>
            )}
            {isAdmin && (
                <Link to="/dashboard/manageServices">
                    <div className="dashboardList">
                        <FontAwesomeIcon
                            className="sidebarIcon"
                            icon={faTasks}
                        />
                        <h5>Manage Visa Services</h5>
                    </div>
                </Link>
            )}
        </div>
    );
};

export default Sidebar;
