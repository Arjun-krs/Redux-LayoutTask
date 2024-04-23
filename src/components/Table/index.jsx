import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt, FaEye, FaEdit } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faStepBackward, faAngleLeft, faAngleRight, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { getAction, deleteAction } from "../Action/index";
import Input from "../InputField/index"
import "../../App.scss";
import Cancel from "../../assets/images/cancel.svg";
import Search from "../../assets/images/search.svg";
import Button from "../Button/index"

function Table() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.login.userData);
    const error = useSelector((state) => state.login.error);
    const [showPopup, setShowPopup] = useState(false);
    const [deleteUserId, setDeleteUserId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(7);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        dispatch(getAction());
    }, []);

    const onDelete = (id) => {
        setDeleteUserId(id);
        setShowPopup(true);
    }

    const handleConfirmDelete = () => {
        dispatch(deleteAction(deleteUserId))
            .then(() => {
                setShowPopup(false);
            })
            .catch((error) => {
                console.error("Error deleting user: ", error);
                setShowPopup(false);
            });
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

    const handlePageClick = (pageNumber) => {
        if (typeof pageNumber === 'number') {
            setCurrentPage(pageNumber);
        } else if (pageNumber === 'start') {
            setCurrentPage(1);
        } else if (pageNumber === 'prev' && currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        } else if (pageNumber === 'next' && currentPage < pageCount) {
            setCurrentPage(prev => prev + 1);
        } else if (pageNumber === 'end') {
            setCurrentPage(pageCount);
        }
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Array.isArray(users) ? users.slice(indexOfFirstItem, indexOfLastItem) : [];

    const filteredItems = currentItems.filter((user) => {
        return (
            user.CustomerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.CustomerContact.includes(searchQuery) ||
            user.CustomerEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.Country.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.State.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    const pageCount = Math.ceil(users.length / itemsPerPage);

    const handlePerPageOptionChange = (value) => {
        setItemsPerPage(value);
        setCurrentPage(1);
    };

    const [perPageOptions] = useState([7, 14, 21, 28]);

    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            <div className="search-wrapper mt-4 d-flex" style={{ gap: 20, marginLeft: 800 }}>
                <div className="input">
                    <img src={Search} alt="search-icon" />
                    <Input
                        type="text"
                        placeholder="Search"
                        className="form-control"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
                <Button
                    text="Export CSV"
                    backgroundColor="white"
                    color="#FE7720"
                    border="1px solid #FE7720"
                    width="150px"
                    height="38px"
                    borderRadius="10px"
                />
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
                        {filteredItems.map((user, index) => (
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

                <div className="pagination-container d-flex justify-content-between">
                    <div className="page d-flex" style={{ width: 60 }}>
                        <select
                            id="itemsPerPage"
                            className="form-select"
                            value={itemsPerPage}
                            onChange={(e) => handlePerPageOptionChange(Number(e.target.value))}
                        >
                            <option value="" disabled>Select items per page</option>
                            {perPageOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        {/* <p>Coupons per page</p> */}
                    </div>
                    <div className="pagination-btn">
                        <button
                            className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
                            onClick={() => handlePageClick(1)}
                            disabled={currentPage === 1}
                        >
                            <FontAwesomeIcon icon={faStepBackward} />
                        </button>
                        <button
                            className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
                            onClick={() => handlePageClick(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                        {Array.from({ length: pageCount }, (_, i) => (
                            <button
                                key={i + 1}
                                className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
                                onClick={() => handlePageClick(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            className={`pagination-button ${currentPage === pageCount ? 'disabled' : ''}`}
                            onClick={() => handlePageClick(currentPage + 1)}
                            disabled={currentPage === pageCount}
                        >
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                        <button
                            className={`pagination-button ${currentPage === pageCount ? 'disabled' : ''}`}
                            onClick={() => handlePageClick(pageCount)}
                            disabled={currentPage === pageCount}
                        >
                            <FontAwesomeIcon icon={faStepForward} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="fixed-bottom text-end m-4">
                <button className="primary-btn btn rounded-circle" style={{ width: "50px", height: "50px" }} onClick={handleNavigation}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            {showPopup && (
                <div className="modal show" tabIndex="-1" role="dialog" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="mx-auto m-4">
                                <h5 className="modal-title">Delete Record?</h5>
                            </div>
                            <div className="mx-auto m-3">
                                <img src={Cancel} alt="cancel" />
                            </div>
                            <div className="mx-auto m-4">
                                <button type="button" className="primary-btn" onClick={handleCancelDelete}>Cancel</button>
                                <button type="button" className="secondary-btn" onClick={handleConfirmDelete}>Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Table;
