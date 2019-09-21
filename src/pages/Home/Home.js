import React, {Component} from 'react';
import fetchData from '../../services/fetchData';
import { GET_POSTS_API } from '../../constants/serverUrls';
import PostSummary from '../../CommonComponents/PostSummary';

class Home extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        this.loadPostData();
    }

    loadPostData = async () => {
        try {
            const posts = await fetchData(GET_POSTS_API, "GET");
            this.setState({ posts });
        } catch (e) {
            console.error(e);
        }
    };

    render() {

        const { posts } = this.state;

        return (
            <div>
                {posts.map((post, postIndex) => {
                    return (
                        <PostSummary
                            id={post.id}
                            title={post.title}
                            content={post.content}
                            author={post.author}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Home;