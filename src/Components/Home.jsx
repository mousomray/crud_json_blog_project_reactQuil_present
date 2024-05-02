import React from 'react'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { myBlogs } from '../Service/Api';
import { deleteblog } from '../Service/Api';

const Home = () => {

    const [blogs, setblogs] = useState([]);

    const getdata = async () => {
        const response = await myBlogs() // Call getUsers() function
        setblogs(response.data)
    }

    useEffect(() => {
        getdata()
    }, [])

      // Create a function for delete
    const deletemyblog = async (id) => {
        await deleteblog(id)
        getdata()
        toast.success("Blog deleted successfully");
    }


    return (
        <>
        <ToastContainer/>
            {/* <!-- Page Header--> */}
            <header class="masthead" style={{ backgroundImage: 'url(assets/img/home-bg.jpg)' }}>
                <div class="container position-relative px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <div class="site-heading">
                                <h1>Blog</h1>
                                <span class="subheading">Welcome to my Blog</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- Main Content--> */}
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">

                    {blogs?.slice(0, blogs.length).reverse().map((value) => {
                        return (
                            <>
                                <div class="col-md-10 col-lg-8 col-xl-7" key={value.id}>
                                    {/* <!-- Post preview--> */}
                                    <div class="post-preview">
                                        <Link to={`/details/${value.id}`}>
                                            <h2 class="post-title">{value.title}</h2>
                                            <h3 class="post-subtitle">{value.subtitle}</h3>
                                            <p

                                                dangerouslySetInnerHTML={{ __html: ((value?.yourblog).slice(0, 200) + '...') }}

                                            />
                                        </Link>
                                        <p class="post-meta">
                                            Posted by
                                            <Link> {value.authorname} </Link>
                                            on {value.date}
                                        </p>
                                    </div>
                                    {/* <!-- Divider--> */}
                                    <hr class="my-4" />

                                    {/* <!-- Pager--> */}
                                    <div class="d-flex justify-content-start mb-4"><a class="btn btn-danger text-uppercase" onClick={() => deletemyblog(value.id)}>Delete</a></div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default Home
