import React, {Component} from 'react';
import fetchData from '../../services/fetchData';
import { GET_POSTS_API } from '../../constants/serverUrls';
import PostSummary from '../../CommonComponents/PostSummary';
import LoadingIndicator from '../../CommonComponents/LoadingIndicator';

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
                {
                    posts.length
                    ?
                        posts.map((post, postIndex) => {
                            return (
                                <PostSummary
                                    id={post.id}
                                    key={postIndex}
                                    title={post.title}
                                    content={post.content}
                                    author={post.author}
                                />
                            )
                        })
                    :
                        <LoadingIndicator/>
                }
            </div>
        );
    }
}

export default Home;