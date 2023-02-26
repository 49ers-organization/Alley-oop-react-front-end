import { Button, Modal, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BottomBar.css";
import "./Sign-up.css";
import GoogleIcon from '@mui/icons-material/Google';
import { Facebook, FacebookOutlined, FacebookRounded } from '@mui/icons-material';

const OrangeButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 18px',
    textAlign: 'center',
    lineHeight: 1.5,
    backgroundColor: '#F58915',

    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"League Spartan"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#F58915',

        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#F58915',

    },

});
const style = {

    position: 'absolute',
    top: '50%',
    left: '50%',
    padding: 4,
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '60%',
    bgcolor: '#ffffff',
    border: 'none',
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
};



const ForgotPassword = () => {
    return (
        <div className="forgot-password">
            <a href="#">Forgot password?</a>
        </div>
    );
};


function BottomBar() {
    const [active, setActive] = useState("nav__menu");
    const [activeLink, setActiveLink] = useState("nav__item");
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setFormState('SIGNIN')
        setOpen(false)};
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [newPassword, setnewPassword] = useState('');

    const [formState, setFormState] = useState('SIGNIN');


    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission here
    };

    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
        <nav className="nav">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    {(formState === 'SIGNUP' &&
                        <div>
                            <h1 style={{ color: '#b3b3b3', fontFamily: 'League Spartan, sans-serif ', fontWeight: '300', fontSize: '25px', marginTop: '30px', marginLeft: '40px' }}>Sign up</h1>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', marginRight: '25px', marginTop: '25px' }}>
                                <label style={{ marginRight: '40px', textAlign: "left", textIndent: '10px', marginTop: '10px' }}>
                                    <input type="email"
                                        id="email"
                                        name="email"
                                        marginTop='10px'
                                        style={{
                                            textAlign: "left", textIndent: '20px', width: "570px", height: "55px", marginLeft: '30px', border: "5px solid orange", borderWidth: "1px",
                                            borderRadius: "9px"
                                        }}
                                        placeholder="Email"
                                        required
                                        value={email} onChange={(e) => setEmail(e.target.value)} />
                                </label>
                                <br />

                                <br />
                                <label style={{ marginBottom: '3px', marginRight: '40px', textAlign: "left", textIndent: '10px' }}>
                                    <input type="password"
                                        id="password"
                                        name="password"

                                        style={{
                                            textAlign: "left", textIndent: '15px', width: "570px", height: "55px", marginLeft: '30px', border: "5px solid orange", borderWidth: "1px",
                                            borderRadius: "9px"
                                        }}
                                        placeholder="Password"
                                        required
                                        value={password} onChange={(e) => setpassword(e.target.value)} />
                                </label>
                                <br />

                                <OrangeButton type="Sign up" style={{ color: '#fff', border: 'none', borderRadius: '5px', width: '150px', height: '40px', margin: "0 auto", marginTop: "20px", marginBottom: "4px" }} >Sign up</OrangeButton>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px 0' }}>
                                    <hr style={{ width: '40%', borderTop: '1px solid #ccc' }} />
                                    <span style={{ margin: '0 10px' }}>Or</span>
                                    <hr style={{ width: '40%', borderTop: '1px solid #ccc' }} />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                    <GoogleIcon fontSize="large" color="primary" sx={{ paddingTop: '10px', marginLeft: '200px', marginTop: '0px' }} />
                                    <FacebookOutlined fontSize="large" color="primary" sx={{ paddingTop: '10px', marginTop: '0px', marginLeft: '200px' }} />
                                </div>
                            </form>

                        </div>)
                        || (formState === 'SIGNIN' &&
                            <div>
                                <h1 style={{ color: '#b3b3b3', fontFamily: 'League Spartan, sans-serif ', fontWeight: '300', fontSize: '25px', marginTop: '30px', marginLeft: '40px' }}>Sign in</h1>
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', marginRight: '25px' }}>
                                    <label style={{ marginRight: '40px', textAlign: "left", textIndent: '10px', marginTop: '40px' }}>
                                        <input type="email"
                                            id="email"
                                            name="email"
                                            marginTop='10px'
                                            style={{
                                                textAlign: "left", textIndent: '20px', width: "570px", height: "55px", marginLeft: '30px', border: "5px solid orange", borderWidth: "1px",
                                                borderRadius: "9px"
                                            }}
                                            placeholder="Email"
                                            required
                                            value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </label>
                                    <br />

                                    <br />
                                    <label style={{ marginBottom: '3px', marginRight: '40px', textAlign: "left", textIndent: '10px' }}>
                                        <input type="password"
                                            id="password"
                                            name="password"

                                            style={{
                                                textAlign: "left", textIndent: '15px', width: "570px", height: "55px", marginLeft: '30px', border: "5px solid orange", borderWidth: "1px",
                                                borderRadius: "9px"
                                            }}
                                            placeholder="Password"
                                            required
                                            value={password} onChange={(e) => setpassword(e.target.value)} />
                                    </label>
                                    <br />

                                    <OrangeButton type="Sign in" style={{ color: '#fff', border: 'none', borderRadius: '5px', width: '150px', height: '40px', margin: "0 auto", marginTop: "20px" }} >Sign in</OrangeButton>

                                </form>

                            </div>)
                        || (formState === 'PASSWORD' &&
                            <div>
                                <h1 style={{ color: '#b3b3b3', fontFamily: 'League Spartan, sans-serif ', fontWeight: '300', fontSize: '25px', marginTop: '30px', marginLeft: '40px' }}>Account recovery</h1>
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', marginRight: '25px' }}>
                                    <label style={{ marginRight: '40px', textAlign: "left", textIndent: '10px', marginTop: '40px' }}>
                                        <input type="email"
                                            id="email"
                                            name="email"
                                            marginTop='10px'
                                            style={{
                                                textAlign: "left", textIndent: '20px', width: "570px", height: "55px", marginLeft: '30px', border: "5px solid orange", borderWidth: "1px",
                                                borderRadius: "9px"
                                            }}
                                            placeholder="Email"
                                            required
                                            value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </label>
                                    <br />

                                    <br />
                                    <label style={{ marginBottom: '3px', marginRight: '40px', textAlign: "left", textIndent: '10px' }}>
                                        <input type="password"
                                            id="password"
                                            name="password"

                                            style={{
                                                textAlign: "left", textIndent: '15px', width: "570px", height: "55px", marginLeft: '30px', border: "5px solid orange", borderWidth: "1px",
                                                borderRadius: "9px"
                                            }}
                                            placeholder="New Password"
                                            required
                                            value={password} onChange={(e) => setpassword(e.target.value)} />
                                    </label>
                                    <br />
                                    <label style={{ marginBottom: '3px', marginRight: '40px', textAlign: "left", textIndent: '10px' }}>
                                        <input type="password"
                                            id="newpassword"
                                            name="newpassword"

                                            style={{
                                                textAlign: "left", textIndent: '15px', width: "570px", height: "55px", marginLeft: '30px', border: "5px solid orange", borderWidth: "1px",
                                                borderRadius: "9px"
                                            }}
                                            placeholder="Confirm Password"
                                            required
                                            value={newPassword} onChange={(e) => setnewPassword(e.target.value)} />
                                    </label>
                                    <br />

                                    <OrangeButton type="Next" style={{ color: '#fff', border: 'none', borderRadius: '5px', width: '150px', height: '40px', margin: "0 auto", marginTop: "20px" }} >Next</OrangeButton>

                                </form>

                            </div>)
                    }





                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', marginRight: '20px', marginTop: '-30px' }}>

                        <div className="Sign-up">
                            {formState === 'SIGNUP' 
                                ?
                                <a onClick={() => setFormState('SIGNIN')} >Sign In ?</a>
                                :
                                formState !== 'PASSWORD' && 
                                <div>
                                    <a onClick={() => setFormState('SIGNUP')}>Sign Up ?</a>
                                    <br />
                                    <a onClick={() => setFormState('PASSWORD')}>Forgot Password ?</a>
                                </div>
                            }
                        </div>
                    </form>

                </Box>
            </Modal>

            <a href="#" className="nav__brand">
                herdoy
            </a>
            <ul className={active}>
                <li className="nav__item">
                    <Button component={Link} to="/">
                        Home
                    </Button>
                </li>
                <li className="nav__item">
                    <Button component={Link} to="/#">
                        About
                    </Button>
                </li>
                <li className="nav__item" >
                    <Button component={Link} to="/#" >
                        News
                    </Button>
                </li>

                <li className="nav__item">
                    <Button component={Link} to="/contact">
                        Contact
                    </Button>
                </li>
            </ul>
            <OrangeButton onClick={handleOpen} variant="contained"> Get started</OrangeButton>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

        </nav>
    );
}

export default BottomBar;

