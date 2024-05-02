import React, { useState } from 'react';
import { postBlogs } from '../Service/Api';

//For MS office style 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



//For toast message
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';

const initialState = {
    title: '',
    authorname: '',
    subtitle: '',
    yourblog: '',
    image: '',
    date: '',
    time: ''
}

const Writeblog = () => {
    const [blog, setBlog] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const currentDate = new Date();

        // Get day, month, and year components
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();

        const formattedDate = `${day}-${month}-${year}`;

        const time = currentDate.toTimeString().split(' ')[0];

        setBlog({ ...blog, [name]: value, date: formattedDate, time: time });
    };



    // This function is make for React quill
    const handleEditorChange = (content) => {
        setBlog({ ...blog, yourblog: content });
    };



    console.log(blog);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {

            const response = await postBlogs(blog);
            console.log('API Response:', response);

            // Reset the form after successful submission
            setBlog(initialState);
            setLoading(false);
            toast.success("Blog added successfully")

            setTimeout(() => {
                navigate('/')
            }, 5000);

        } catch (error) {
            console.error('Error submitting blog:', error);
            // Optionally, display an error message to the user
            setLoading(false)
        }
    };

    return (
        <>
            <ToastContainer />

            {/* Header content */}
            <header className="masthead" style={{ backgroundImage: 'url(assets/img/home-bg.jpg)' }}>
                {/* Header content */}
            </header>
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="my-5">
                        <h1>Write Your Blogs</h1>
                        <form id="contactForm" onSubmit={handleSubmit}>
                            {/* Form inputs */}
                            <div className="form-floating">
                                <input className="form-control" name="title" type="text" placeholder="Enter your name..." value={blog.title} onChange={handleInputChange} required />
                                <label htmlFor="title">Title</label>
                            </div>
                            {/* Other form fields */}
                            <div className="form-floating">
                                <input className="form-control" name="authorname" type="text" placeholder="Enter your email..." value={blog.authorname} onChange={handleInputChange} required />
                                <label htmlFor="authorname">Author Name</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control" name="subtitle" type="text" placeholder="Enter your phone number..." value={blog.subtitle} onChange={handleInputChange} required />
                                <label htmlFor="subtitle">Sub Title</label>
                            </div>
                            <label htmlFor="yourblog">Write Your Blog</label>
                            <div className="form-floating">
                                <ReactQuill
                                    theme="snow"
                                    name="yourblog"
                                    value={blog.yourblog}
                                    onChange={handleEditorChange}
                                    placeholder="Write your blog here..."
                                    style={{ height: '300px' }}
                                    required
                                />

                            </div>
                            <div className="form-floating">
                                <input className="form-control" name="image" type="file" placeholder="Upload your image..." required
                                    onChange={(e) => setBlog({ ...blog, image: e.target.files[0].name })} />
                                <label htmlFor="image">Image</label>
                            </div>
                            <br />
                            <button className="btn btn-primary text-uppercase" id="submitButton" type="submit">
                                {loading ?
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    :
                                    'Submit Blog'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Writeblog;
