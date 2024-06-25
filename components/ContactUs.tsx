"use client"
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ContactUs: React.FC = () => {

    const initialFormState = {
        name: '',
        message: '',
        email: '',
    };

    const [formData, setFormData] = useState(initialFormState);
    const [isFormValid, setIsFormValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);


    useEffect(() => {
        setFormData(initialFormState);
    }, []);

    const validateForm = (data: typeof initialFormState) => {
        const isFormFilled = data.name.trim() !== '' && data.message.trim() !== '';
        const isEmailValid = validateEmail(data.email);
        setIsFormValid(isFormFilled && isEmailValid);
    };

    const handleClick = (): void => {
        if (isFormValid) {
            console.log('Form submitted:', formData);
            toast.success('Message sent successfully!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            // alert('Cannot submit: Fields are empty or email is invalid');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        validateForm({ ...formData, [name]: value });
    };

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleEmailBlur = () => {
        const isValid = validateEmail(formData.email);
        setIsEmailValid(isValid);
        if (!isValid) {
            toast.error('Please enter a valid email address.', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };
    return (
        <div className="container my-24 px-6 mx-auto" id='contact-us'>
            <section className="text-gray-800 text-center">
                <div className="px-6 py-12 md:px-12">
                    <div className="container mx-auto xl:px-32">
                        <div className="grid gap-6 lg:grid-cols-2 items-start">
                            <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                                <div
                                    className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:mr-0"
                                    style={{ background: 'hsla(0, 0%, 100%, 0.85)', backdropFilter: 'blur(10px)' }}
                                >
                                    <form action="https://formspree.io/f/mldrrdpy" method='POST' className='flex flex-col max-w-[600px] w-full font-averia'>
                                        <div className='pb-8'>
                                            <p className='text-4xl font-bold inline border-b-4 border-[#D14D72] text-[#3D0C11]'>Contact Us</p>
                                            <p className='text-[#3D0C11] font-medium text-lg py-4'>Submit the form below or shoot us an email - <a href='mailto:inquiry@torontocupcake.com' className='text-xl text-[#D14D72] hover:text-[#3D0C11] underline'>inquiry@torontocupcake.com</a></p>
                                        </div>
                                        <input value={formData.name} onChange={handleChange} className='border-b-2 border-[#3D0C11] p-2 rounded-md' type="text" placeholder='Your Name' name='name' title='Please Enter Your Name' required />
                                        <input
                                            value={formData.email}
                                            onChange={handleChange}
                                            onBlur={handleEmailBlur}
                                            className='border-b-2 border-[#3D0C11] p-2 my-4 rounded-md'
                                            type="email"
                                            placeholder='Your Email'
                                            name='email'
                                            title='Please Enter Your Email'
                                            required
                                        />
                                        <textarea value={formData.message} onChange={handleChange} className='border-b-2 border-[#3D0C11] my-4 p-2 rounded-md' name="message" rows={10} placeholder='Your Message' title='Please Enter Your Message' required></textarea>
                                        <button
                                            onClick={handleClick}
                                            // disabled={!isFormValid}
                                            className={`mt-8 mx-auto text-lg md:text-xl text-white font-semibold bg-[#D14D72] group px-6 py-3 my-2 flex justify-between gap-2 items-center active:bg-white rounded-full`}
                                        >
                                            Send Message
                                            <span className='group-hover:translate-x-2 duration-300'>
                                                <svg className="w-8 h-8 ml-1 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                                </svg>
                                            </span>
                                        </button>
                                        <div className='m-auto text-red-800 text-lg font-medium'>
                                            <p>Please Fill the Above Fields to Send Message</p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="md:mb-12 lg:mb-0">
                                <div className="map-container h-[400px] md:h-[500px] lg:h-[700px] relative shadow-lg rounded-lg">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1479286.291086978!2d-79.3812275!3d43.6017309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb5eedcbb9e3%3A0x675a282e8e6a33b4!2sToronto%20Cupcake!5e0!3m2!1sen!2s!4v1717847897452!5m2!1sen!2s"
                                        width="100%" height="100%"
                                        allowFullScreen
                                        className="border-0 absolute inset-0 rounded-lg"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col gap-5 sm:flex-row xl:gap-0  justify-around'>
                <section className='max-w-[550px] text-[#3D0C11] border-l-4 border-[#3D0C11] rounded-lg p-5'>
                    <h2 className='text-2xl mb-4 font-marcellus'>To contact us by phone please call:</h2>
                    <p className='text-xl font-bold font-marcellus'>North America: <span className='text-2xl font-averia'>+1-877-334-9468</span></p>
                    <p className='text-xl font-bold font-marcellus'>Outside of North America: <span className='text-2xl font-averia'> +001-647-478-9464</span></p>
                    <p className='text-xl font-bold font-marcellus'>Local Toronto and GTA: <span className='text-2xl font-averia'>647-478-9464</span></p>
                </section>

                <section className='max-w-[500px] text-[#3D0C11] border-l-4 border-[#3D0C11] rounded-lg p-5'>
                    <h2 className='text-2xl mb-4 font-marcellus'>Hours of Operation:</h2>
                    <p className='text-xl font-bold font-marcellus'>Monday - Saturday: <span className='text-2xl font-averia'>7am - 10pm</span></p>
                    <p className='text-xl font-bold font-marcellus'>Sunday: <span className='text-2xl font-averia'> 7am - 10pm (no pick ups, deliveries for 2doz or more)</span></p>
                </section>

            </section>

        </div>
    );
};

export default ContactUs;
