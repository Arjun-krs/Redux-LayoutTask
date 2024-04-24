import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward, faAngleLeft, faAngleRight, faStepForward } from '@fortawesome/free-solid-svg-icons';

function Pagination({ currentPage, pageCount, onPageClick, onPerPageChange, itemsPerPage, perPageOptions }) {
    return (
        <div className="pagination-container d-flex justify-content-between">
            <div className="page d-flex" style={{ width: 60 }}>
                <select
                    id="itemsPerPage"
                    className="form-select"
                    value={itemsPerPage}
                    onChange={(e) => onPerPageChange(Number(e.target.value))}
                >
                    <option value="" disabled>Select items per page</option>
                    {perPageOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div className="pagination-btn">
                <button
                    className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => onPageClick('start')}
                    disabled={currentPage === 1}
                >
                    <FontAwesomeIcon icon={faStepBackward} />
                </button>
                <button
                    className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => onPageClick('prev')}
                    disabled={currentPage === 1}
                >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                {Array.from({ length: pageCount }, (_, i) => (
                    <button
                        key={i + 1}
                        className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
                        onClick={() => onPageClick(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    className={`pagination-button ${currentPage === pageCount ? 'disabled' : ''}`}
                    onClick={() => onPageClick('next')}
                    disabled={currentPage === pageCount}
                >
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button
                    className={`pagination-button ${currentPage === pageCount ? 'disabled' : ''}`}
                    onClick={() => onPageClick('end')}
                    disabled={currentPage === pageCount}
                >
                    <FontAwesomeIcon icon={faStepForward} />
                </button>
            </div>
        </div>
    );
}

export default Pagination;
