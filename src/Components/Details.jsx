import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Details = () => {

    const { id } = useParams();

    const [blogs, setBlogs] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:3003/blog/${id}`)
        console.log(response);
        setBlogs(response.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            {/* <!-- Page Header--> */}
            <header class="masthead">
                <div class="container position-relative px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <div class="site-heading">
                                <h1>Blog Details</h1>
                                <span class="subheading">Details of each and every Blogs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- Main Content--> */}
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        {/* <!-- Post preview--> */}
                        <div class="post-preview">

                            <h2 class="post-title">{blogs.title}</h2>
                            <h3 class="post-subtitle">{blogs.subtitle}</h3>
                            <img src={blogs.image} alt="" />
                            <p dangerouslySetInnerHTML={{__html: blogs.yourblog}} />


                            <p class="post-meta">
                                Posted by
                                <a href="#!">Start Bootstrap</a>
                                on September 24, 2023
                            </p>
                        </div>

                        {/* <!-- Divider--> */}
                        <hr class="my-4" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Details
