import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt, FaEye, FaEdit } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getAction, deleteAction } from "../../Redux/Action/index";
import Pagination from '../../components/Pagination/index';
import "../../App.scss";
import Cancel from "../../assets/images/cancel.svg";
import SearchBar from '../../components/SearchBar/index';


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

    const handleSearchChange = (value) => {
        setSearchQuery(value);
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
            
                <SearchBar searchQuery={searchQuery} onChange={(e) => handleSearchChange(e.target.value)} />
                
            




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
                                    <FaEye className="icon" onClick={() => handleView(user.id)} style={{ cursor: "pointer", margin: "10px 13px" }} />
                                    <FaEdit className="icon" onClick={() => handleUpdate(user.id)} style={{ cursor: "pointer", margin: "10px 13px" }} />
                                    <FaTrashAlt className="icon" onClick={() => onDelete(user.id)} style={{ cursor: "pointer", margin: "10px 13px" }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Pagination
                    currentPage={currentPage}
                    pageCount={pageCount}
                    onPageClick={handlePageClick}
                    onPerPageChange={handlePerPageOptionChange}
                    itemsPerPage={itemsPerPage}
                    perPageOptions={perPageOptions}
                />
            </div>
            <div className="fixed-bottom mb-5" style={{ left: "90%" }}>
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

