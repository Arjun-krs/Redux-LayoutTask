import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt, FaEye, FaEdit } from "react-icons/fa";
import ConfirmPopup from "../Popup/index";
import "../../App.css";
import Cancel from "../../assets/images/cancel.svg";

function Table() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [deleteUserId, setDeleteUserId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_WEB_URL}/userdata`);
            setUsers(response.data);
            setFilteredUsers(response.data);
        } catch (error) {
            setError("Error fetching data");
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        const results = users.filter(user =>
            Object.values(user).some(value =>
                typeof value === "string" && value.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
        setFilteredUsers(results);
    }, [searchQuery, users]);

    const onDelete = (id) => {
        setDeleteUserId(id);
        setShowPopup(true);
    };

    const handleConfirmDelete = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_WEB_URL}/userdata/${deleteUserId}`);
            getData();
            setShowPopup(false);
        } catch (error) {
            setError("Error deleting user");
            console.error("Error deleting user: ", error);
        }
    };

    const handleCancelDelete = () => {
        setShowPopup(false);
    };

    const handleUpdate = (id) => {
        const updatedUser = users.find(user => user.id === id);
        navigate("/Form", { state: { user: updatedUser, isUpdate: true } });
    };

    const handleView = (id) => {
        const viewUser = users.find(user => user.id === id);
        navigate("/Form", { state: { user: viewUser, isView: true } });
    };

    const handleNavigation = () => {
        navigate("/Form");
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            <div className="d-flex justify-content-end mt-4">
                <input
                    type="text"
                    className="search"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="secondary-btn">Export CSV</button>
            </div>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>E-mail</th>
                            <th>Country</th>
                            <th>State</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((user, index) => (
                            <tr key={index}>
                                <td>{user.CustomerName}</td>
                                <td>{user.CustomerContact}</td>
                                <td>{user.CustomerEmail}</td>
                                <td>{user.Country}</td>
                                <td>{user.State}</td>
                                <td>
                                    <FaEye onClick={() => handleView(user.id)} style={{ cursor: "pointer", margin: "10px 13px" }} />
                                    <FaEdit onClick={() => handleUpdate(user.id)} style={{ cursor: "pointer", margin: "10px 13px" }} />
                                    <FaTrashAlt onClick={() => onDelete(user.id)} style={{ cursor: "pointer", margin: "10px 13px" }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="footer d-flex justify-content-end">
                    <button className="primary-btn btn rounded-circle" style={{ width: "50px", height: "50px" }} onClick={handleNavigation}>+</button>
                </div>
                <div className="pagination">
                    <button className="primary-btn" onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <button className="secondary-btn" onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentItems.length < itemsPerPage}>
                        Next
                    </button>
                </div>
            </div>
            {showPopup && (
                <ConfirmPopup
                    message={"Delete Record?"}
                    onConfirm={() => {
                        console.log("deleted successfully");
                        handleConfirmDelete();
                    }}
                    onCancel={() => {
                        console.log("cancelled successfully");
                        handleCancelDelete();
                    }}
                >
                    <img src={Cancel} alt="cancel" />
                </ConfirmPopup>
            )}
        </>
    );
}

export default Table;
