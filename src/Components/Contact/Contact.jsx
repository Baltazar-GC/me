import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import linkedin_icon from '../../assets/linkedin_icon.svg';
import { Toaster, toast } from 'react-hot-toast';
import { useEffect, useState, useRef } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
    });

    const errorContainerRef = useRef(null);

    useEffect(() => {
        if (errors.name || errors.email) {
            const timeout = setTimeout(() => {
                setErrors({
                    name: '',
                    email: '',
                });
            }, 6000);

            return () => clearTimeout(timeout);
        }
    }, [errors]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!validateEmail(formData.email.trim())) {
            newErrors.email = 'Please enter a valid email address';
            valid = false;
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            errorContainerRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        if (!formData.name.trim() && !formData.email.trim()) {
            toast.error('Please fill in both name and email fields.');
        } else if (!formData.name.trim()) {
            toast.error('Please fill in the name field.');
        } else if (!formData.email.trim()) {
            toast.error('Please fill in the email field.');
        } else if (!validateEmail(formData.email.trim())) {
            toast.error('Please enter a valid email address.');
        }

        return valid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }

        const json = JSON.stringify(formData);

        toast.promise(fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json()), {
            loading: 'Sending...',
            success: (data) => data.success ? data.message : 'Success message here',
            error: () => 'There was an error submitting the form. Please try again.'
        });
    };

    return (
        <div className='contact' id='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="contact" />
                <div ref={errorContainerRef}></div>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="email" />
                            <p>baltazargarciacanllo@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={linkedin_icon} alt="phone" />
                            <a href='https://www.linkedin.com/in/baltazargc/' target='_blank'>baltazargc</a>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="location" />
                            <p>Argentina</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right" onSubmit={handleSubmit}>
                    <div className='name'>
                        <label htmlFor="">Your name</label>
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>
                    <input type="text" placeholder='Enter your name' name='name' value={formData.name} onChange={handleChange} className={errors.name ? 'error' : ''} />
                    <div className='name'>
                        <label htmlFor="">Your email</label>
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>
                    <input type="email" placeholder='Enter your email' name='email' value={formData.email} onChange={handleChange} className={errors.email ? 'error' : ''} />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message' value={formData.message} onChange={handleChange}></textarea>
                    <button className="contact-submit" type='submit'>Submit now</button>
                </form>
            </div>
            <Toaster />
        </div>
    )
}

export default Contact;
