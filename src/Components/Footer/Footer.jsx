import './Footer.css';
import user_icon from '../../assets/user_icon.svg';
import { Toaster, toast } from 'react-hot-toast';
import { useState, useEffect } from 'react';

const Footer = () => {
    const [errors, setErrors] = useState({
        email: '',
    });

    useEffect(() => {
        if (errors.email) {
            const timeout = setTimeout(() => {
                setErrors({
                    email: '',
                });
            }, 6000);

            return () => clearTimeout(timeout);
        }
    }, [errors]);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        
        if (!email || !validateEmail(email)) {
            setErrors({ email: 'Please enter a valid email address' });
            toast.error('Please enter a valid email address');
            return;
        }

        formData.append("access_key", "d998d167-34bd-4552-85f1-3c480426022d");
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        toast.promise(
            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json()),
            {
                loading: 'Sending...',
                success: (data) => data.success ? data.message : 'Success message here',
                error: () => 'There was an error submitting the form. Please try again.'
            }
        );
        
        event.target.reset();
    };

    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <h2 className='footer-title'>Baltazar.</h2>
                    <p>I am a backend developer from Argentina with +2 years of experience in companies like Softtek, YPF and Webstarted.</p>
                </div>
                <form className="footer-top-right" onSubmit={onSubmit}>
                    <div className="footer-email-input">
                        <img src={user_icon} alt="footer" />
                        <input 
                            type="text" 
                            placeholder='Enter your email' 
                            name='email' 
                            className={errors.email ? 'error' : ''}
                        />
                    </div>
                    <button className="footer-subscribe" type='submit'>Subscribe</button>
                </form>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">© 2024 Baltazar Garcia. All rights reserved.</div>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect With Me</p>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Footer;
