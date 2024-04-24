// // import React, { useState } from "react";
// // import Boom from "../../../src/assets/images/boomlogo.svg";
// // import "./style.scss";
// // import Input from "../../components/InputField/index";
// // import { useNavigate } from "react-router-dom";
// // import { useDispatch } from "react-redux";
// // import { loginAction } from "../../Redux/Action/index";
// // import { Icon } from 'react-icons-kit';
// // import PhoneNumberList from "../../components/CountryPhone/index"
// // import { eyeOff } from 'react-icons-kit/feather/eyeOff';
// // import { eye } from 'react-icons-kit/feather/eye';


// // function Signup() {
// //     const navigate = useNavigate();
// //     const dispatch = useDispatch();

// //     // Form state
// //     const [LegalName, setLegalName] = useState("");
// //     const [UserName, setUserName] = useState("");
// //     const [Email, setEmail] = useState("");
// //     const [PhoneNumber, setPhoneNumber] = useState("");
// //     const [Password, setPassword] = useState("");

// //     // Password visibility state
// //     const [type, setType] = useState('Password');
// //     const [icon, setIcon] = useState(eyeOff);

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         const formData = {
// //             LegalName,
// //             UserName,
// //             Email,
// //             PhoneNumber,
// //             Password,
// //         };
// //         dispatch(loginAction(formData))
// //             .then(() => {
// //                 navigate("/");
// //             })
// //             .catch((error) => {
// //                 console.error("Error updating data:", error);
// //             });
// //     }

// //     const handleToggle = () => {
// //         if (type === 'Password') {
// //             setIcon(eye);
// //             setType('text');
// //         } else {
// //             setIcon(eyeOff);
// //             setType('Password');
// //         }
// //     }

// //     const handleNavigation = () => {
// //         navigate("/");
// //     };


// //     return (
// //         <div className="login-background">
// //             <div className="boom-logo text-center">
// //                 <img
// //                     src={Boom}
// //                     className="mt-4"
// //                     alt="logo"
// //                     width={174}
// //                     height={40}
// //                 />
// //             </div>
// //             <div className="login">
// //                 <form className="form" onSubmit={handleSubmit}>
// //                     <h2>Merchant Registration</h2>
// //                     <h5>Enter your account details</h5>
// //                     <div className="textfield mt-4">
// //                         <label className="form-label">Business Legal Name</label>
// //                         <Input
// //                             type="text"
// //                             name="LegalName"
// //                             placeholder="Enter"
// //                             className="form-control"
// //                             value={LegalName}
// //                             onChange={(e) => setLegalName(e.target.value)}
// //                         />
// //                     </div>

// //                     <div className="textfield mt-3">
// //                         <label className="form-label">User Handle</label>
// //                         <Input
// //                             type="text"
// //                             name="UserName"
// //                             placeholder="Enter"
// //                             className="form-control"
// //                             value={UserName}
// //                             onChange={(e) => setUserName(e.target.value)}

// //                         />
// //                     </div>
// //                     <div className="textfield mt-3">
// //                         <label className="form-label">E-mail Address</label>
// //                         <Input
// //                             type="email"
// //                             name="Email"
// //                             placeholder="Enter"
// //                             className="form-control"
// //                             value={Email}
// //                             onChange={(e) => setEmail(e.target.value)}
// //                         />
// //                     </div>

// //                     <div className="textfield mt-3">
// //                         <label className="form-label">Phone Number</label>

// //                         <PhoneNumberList />

// //                     </div>



// //                     <div className="textfield mt-3 position-relative">
// //                         <label className="form-label">Password</label>
// //                         <Input
// //                             type={type}
// //                             name="Password"
// //                             placeholder="Enter"
// //                             className="form-control"
// //                             value={Password}
// //                             onChange={(e) => setPassword(e.target.value)}
// //                         />
// //                         <span className="eye-icon position-absolute" onClick={handleToggle}>
// //                             <Icon className="eye-icon" icon={icon} size={16} />
// //                         </span>
// //                     </div>


// //                     <button type="submit" className="btn btn-warning col-12 mt-4 text-white">Register</button>
// //                 </form>
// //                 <p>Already have an account? <a href="#" onClick={handleNavigation}>Login Now</a> </p>
// //                 <p>By creating an account, you agree the <a href="#">Terms and conditions</a></p>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Signup;

// import React, { useState } from "react";
// import Boom from "../../../src/assets/images/boomlogo.svg";
// import "./style.scss";
// import Input from "../../components/InputField/index";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loginAction } from "../../Redux/Action/index";
// import { Icon } from 'react-icons-kit';
// import PhoneNumberList from "../../components/CountryPhone/index";
// import { eyeOff } from 'react-icons-kit/feather/eyeOff';
// import { eye } from 'react-icons-kit/feather/eye';
// import FormValidation from '../../components/FormValidation/index';

// function Signup() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const [errors, setErrors] = useState({});

//     // Form state
//     const [LegalName, setLegalName] = useState("");
//     const [UserName, setUserName] = useState("");
//     const [Email, setEmail] = useState("");
//     const [PhoneNumber, setPhoneNumber] = useState("");
//     const [Password, setPassword] = useState("");

//     // Password visibility state
//     const [type, setType] = useState('Password');
//     const [icon, setIcon] = useState(eyeOff);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const validationErrors = validate();
//         if (Object.keys(validationErrors).length === 0) {
//             const formData = {
//                 LegalName,
//                 UserName,
//                 Email,
//                 PhoneNumber,
//                 Password,
//             };

//             dispatch(loginAction(formData))
//                 .then(() => {
//                     navigate("/");
//                 })
//                 .catch((error) => {
//                     console.error("Error updating data:", error);
//                 });
//         }
//     }

//     const validate = () => {
//         let validationErrors = {};

//         if (!LegalName) {
//             validationErrors.LegalName = 'Business Legal Name is required';
//         }

//         if (!UserName) {
//             validationErrors.UserName = 'User Handle is required';
//         }

//         if (!Email) {
//             validationErrors.Email = 'E-mail Address is required';
//         }

//         if (!PhoneNumber) {
//             validationErrors.PhoneNumber = 'Phone Number is required';
//         }

//         if (!Password) {
//             validationErrors.Password = 'Password is required';
//         }

//         setErrors(validationErrors);

//         return validationErrors;
//     };

//     const handleToggle = () => {
//         if (type === 'Password') {
//             setIcon(eye);
//             setType('text');
//         } else {
//             setIcon(eyeOff);
//             setType('Password');
//         }
//     }

//     const handleNavigation = () => {
//         navigate("/");
//     };

//     return (
//         <div className="login-background">
//             <div className="boom-logo text-center">
//                 <img
//                     src={Boom}
//                     className="mt-4"
//                     alt="logo"
//                     width={174}
//                     height={40}
//                 />
//             </div>
//             <div className="login">
//                 <form className="form" onSubmit={handleSubmit}>
//                     <h2>Merchant Registration</h2>
//                     <h5>Enter your account details</h5>
//                     <div className="textfield mt-4">
//                         <label className="form-label">Business Legal Name</label>
//                         <Input
//                             type="text"
//                             name="LegalName"
//                             placeholder="Enter"
//                             className="form-control"
//                             value={LegalName}
//                             onChange={(e) => setLegalName(e.target.value)}
//                         />
//                         {errors.LegalName && <FormValidation errors={errors.LegalName} />}
//                     </div>

//                     <div className="textfield mt-3">
//                         <label className="form-label">User Handle</label>
//                         <Input
//                             type="text"
//                             name="UserName"
//                             placeholder="Enter"
//                             className="form-control"
//                             value={UserName}
//                             onChange={(e) => setUserName(e.target.value)}
//                         />
//                         {errors.UserName && <FormValidation errors={errors.UserName} />}
//                     </div>

//                     <div className="textfield mt-3">
//                         <label className="form-label">E-mail Address</label>
//                         <Input
//                             type="email"
//                             name="Email"
//                             placeholder="Enter"
//                             className="form-control"
//                             value={Email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         {errors.Email && <FormValidation errors={errors.Email} />}
//                     </div>

//                     <div className="textfield mt-3">
//                         <label className="form-label">Phone Number</label>
//                         <PhoneNumberList />
//                         {errors.PhoneNumber && <FormValidation errors={errors.PhoneNumber} />}
//                     </div>

//                     <div className="textfield mt-3 position-relative">
//                         <label className="form-label">Password</label>
//                         <Input
//                             type={type}
//                             name="Password"
//                             placeholder="Enter"
//                             className="form-control"
//                             value={Password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <span className="eye-icon position-absolute" onClick={handleToggle}>
//                             <Icon className="eye-icon" icon={icon} size={16} />
//                         </span>
//                         {errors.Password && <FormValidation errors={errors.Password} />}
//                     </div>

//                     <button type="submit" className="btn btn-warning col-12 mt-4 text-white">Register</button>
//                 </form>
//                 <p>Already have an account? <a href="#" onClick={handleNavigation}>Login Now</a> </p>
//                 <p>By creating an account, you agree the <a href="#">Terms and conditions</a></p>
//             </div>
//         </div>
//     );
// }

// export default Signup;

import React, { useState } from "react";
import Boom from "../../../src/assets/images/boomlogo.svg";
import "./style.scss";
import Input from "../../components/InputField/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Redux/Action/index";
import { Icon } from 'react-icons-kit';
import PhoneNumberList from "../../components/CountryPhone/index";
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Form state
    const [LegalName, setLegalName] = useState("");
    const [UserName, setUserName] = useState("");
    const [Email, setEmail] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    // Password visibility state
    const [type, setType] = useState('Password');
    const [icon, setIcon] = useState(eyeOff);

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            const formData = {
                LegalName,
                UserName,
                Email,
                PhoneNumber,
                Password,
            };

            dispatch(loginAction(formData))
                .then(() => {
                    navigate("/");
                })
                .catch((error) => {
                    console.error("Error updating data:", error);
                });
        }
    }

    const validate = () => {
        let validationErrors = {};

        if (!LegalName) {
            validationErrors.LegalName = 'Business Legal Name is required';
        }

        if (!UserName) {
            validationErrors.UserName = 'User Handle is required';
        }

        if (!Email) {
            validationErrors.Email = 'E-mail Address is required';
        }

        if (!PhoneNumber) {
            validationErrors.PhoneNumber = 'Phone Number is required';
        }

        if (!Password) {
            validationErrors.Password = 'Password is required';
        }

        setErrors(validationErrors);

        return validationErrors;
    };

    const handleToggle = () => {
        if (type === 'Password') {
            setIcon(eye);
            setType('text');
        } else {
            setIcon(eyeOff);
            setType('Password');
        }
    }

    const handleNavigation = () => {
        navigate("/");
    };

    return (
        <div className="login-background">
            <div className="boom-logo text-center">
                <img
                    src={Boom}
                    className="mt-4"
                    alt="logo"
                    width={174}
                    height={40}
                />
            </div>
            <div className="login">
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Merchant Registration</h2>
                    <h5>Enter your account details</h5>
                    <div className="textfield mt-4">
                        <label className="form-label">Business Legal Name</label>
                        <Input
                            type="text"
                            name="LegalName"
                            placeholder="Enter"
                            className="form-control"
                            value={LegalName}
                            onChange={(e) => setLegalName(e.target.value)}
                        />
                        {errors.LegalName && <div className="text-danger">{errors.LegalName}</div>}
                    </div>

                    <div className="textfield mt-3">
                        <label className="form-label">User Handle</label>
                        <Input
                            type="text"
                            name="UserName"
                            placeholder="Enter"
                            className="form-control"
                            value={UserName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        {errors.UserName && <div className="text-danger">{errors.UserName}</div>}
                    </div>

                    <div className="textfield mt-3">
                        <label className="form-label">E-mail Address</label>
                        <Input
                            type="email"
                            name="Email"
                            placeholder="Enter"
                            className="form-control"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.Email && <div className="text-danger">{errors.Email}</div>}
                    </div>

                    <div className="textfield mt-3">
                        <label className="form-label">Phone Number</label>
                        <PhoneNumberList />
                        {errors.PhoneNumber && <div className="text-danger">{errors.PhoneNumber}</div>}
                    </div>

                    <div className="textfield mt-3 position-relative">
                        <label className="form-label">Password</label>
                        <Input
                            type={type}
                            name="Password"
                            placeholder="Enter"
                            className="form-control"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="eye-icon position-absolute" onClick={handleToggle}>
                            <Icon className="eye-icon" icon={icon} size={16} />
                        </span>
                        {errors.Password && <div className="text-danger">{errors.Password}</div>}
                    </div>

                    <button type="submit" className="btn btn-warning col-12 mt-4 text-white">Register</button>
                </form>
                <p>Already have an account? <a href="#" onClick={handleNavigation}>Login Now</a> </p>
                <p>By creating an account, you agree the <a href="#">Terms and conditions</a></p>
            </div>
        </div>
    );
}

export default Signup;
