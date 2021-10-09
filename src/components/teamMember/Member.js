import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Member.css";

const Member = (props) => {
    console.log(props.member);
    const { img, name, student_Id, current_semester, salary, dept } = props.member;

    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <>
            <div className="col member">
                <div className="card w-95 single-member me-3 ">
                    <img src={img} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">Name:{name}</h4>
                        <h5 className="card-text">Student ID: {student_Id} </h5>
                        <h5> Semester: {current_semester} </h5>
                        <h5> Department: {dept} </h5>
                        <h5> Expected salary: {salary} </h5>
                        <button
                            onClick={() => props.handleAddToCart(props.member)}
                            className="btn btn-outline-warning">
                            {element}
                            Select the member </button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Member;