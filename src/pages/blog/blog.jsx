import React from 'react';
import { connect } from 'react-redux';
import './blog.css';

const Blog = props => {
    return (
        <div id="blog">
            <div className="container d-flex align-items-center justify-content-start fade-in-fwd blog-container">
                <div className="row pt-5 pb-5">
                    <div className="card-columns">
                        {props.posts.map((post, key) => {
                            return (
                                <a href={post.link} key={key}>
                                    <div className="card border border-dark blog-post">
                                        <img className="card-img-top" src={post.thumbnail} alt="blog post thumbnail"/>
                                        <div className="card-body">
                                            <h5 className="card-title text-white">{post.title}</h5>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        posts: state.blogState.posts
    }
}
  
export default connect(mapStateToProps)(Blog);