import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt, FaEye, FaEdit } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getAction, deleteAction } from "../Action/index";
import Input from "../InputField/index"
import Button from "../Button/index"
import "../../App.css";
import Cancel from "../../assets/images/cancel.svg";
import Search from "../../assets/images/search.svg";

function Table() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.login.userData); // Selecting userData from Redux state
    const error = useSelector((state) => state.login.error); // Selecting error from Redux state
    const [showPopup, setShowPopup] = useState(false);
    const [deleteUserId, setDeleteUserId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;


    useEffect(() => {
        dispatch(getAction());
    }, []);


    const onDelete = (id) => {
        setDeleteUserId(id);
        setShowPopup(true);

    };


    const handleConfirmDelete = () => {
        dispatch(deleteAction(deleteUserId))
            .then(() => {
                setShowPopup(false);
                setTimeout(() => {
                    dispatch(getAction());
                }, 1000);
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
            <div className="search-wrapper d-flex justify-content-end m-4" style={{ gap: "20px" }}>
                <div className="input">
                    <img src={Search} />
                    <Input
                        type="Search"
                        placeholder="Search"
                        className="form-control"
                    />
                </div>
                <Button
                    text="Export CSV"
                    backgroundColor="white"
                    color="#FE7720"
                    border="1px solid #FE7720"
                    width="134px"
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
                        {currentItems.map((user, index) => (
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
                                <button type="button" className="primary-btn" onClick={handleConfirmDelete}>Delete</button>
                                <button type="button" className="secondary-btn" onClick={handleCancelDelete}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Table;
