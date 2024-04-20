import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt, FaEye, FaEdit } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getAction, deleteAction } from "../Action/index";
import "../../App.css";
import Cancel from "../../assets/images/cancel.svg";

function Table() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.login.userData); // Selecting userData from Redux state
    const error = useSelector((state) => state.login.error); // Selecting error from Redux state
    const [showPopup, setShowPopup] = useState(false);
    const [deleteUserId, setDeleteUserId] = useState(null); // State to store the user ID to be deleted
    const [currentPage, setCurrentPage] = useState(1); // State to manage current page number
    const itemsPerPage = 5; // Number of items to display per page


    useEffect(() => {
        dispatch(getAction());// Fetch initial user data when the component mounts
    }, []);

    // Function to initiate delete operation
    const onDelete = (id) => {
        setDeleteUserId(id); // Set the user ID to be deleted
        setShowPopup(true);
    }

    // Function to handle confirmed delete operation
    const handleConfirmDelete = () => {
        dispatch(deleteAction(deleteUserId)) // Dispatch delete action
            .then(() => {
                setShowPopup(false); // Close the popup after successful deletion
            })
            .catch((error) => {
                console.error("Error deleting user: ", error);
                setShowPopup(false);
            });
    };



    // Function to handle cancel delete operation
    const handleCancelDelete = () => {
        setShowPopup(false);
    };

    // Function to handle update operation
    const handleUpdate = (id) => {
        const updatedUser = users.find(user => user.id === id);
        navigate("/Form", { state: { user: updatedUser, isUpdate: true } });
    };

    // Function to handle view operation
    const handleView = (id) => {
        const viewUser = users.find(user => user.id === id);
        navigate("/Form", { state: { user: viewUser, isView: true } });
    };

    // Function to navigate to the form for adding a new user
    const handleNavigation = () => {
        navigate("/Form");
    };

    // Calculate index of last and first item for pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Array.isArray(users) ? users.slice(indexOfFirstItem, indexOfLastItem) : [];

    return (
        <>

            {error && <p className="text-danger">{error}</p>}
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

                <div className="pagination justify-content-end mt-5">
                    <button style={{ borderStyle: "none", backgroundColor: "transparent", fontSize: "24px" }} onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1}>
                        <IoIosArrowBack />
                    </button>
                    <button style={{ borderStyle: "none", backgroundColor: "transparent", fontSize: "24px" }} onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentItems.length < itemsPerPage}>
                        <IoIosArrowForward />
                    </button>
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
