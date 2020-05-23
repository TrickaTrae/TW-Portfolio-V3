import React, { Component } from 'react';
import './blog.css';

class Blog extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount = () => {
        this.fetchMediumPosts();
    }

    render() {
        return (
            <div id="blog">
                <div className="container d-flex align-items-center justify-content-start fade-in-fwd blog-container">
                    <div className="card-columns">
                        {this.state.posts.map((post, key) => {
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
        );
    }

    fetchMediumPosts = () => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@traeger.winn').then(result => result.json()).then(data => {
            this.setState({ posts: data.items });
        })
    }
}
export default Blog;