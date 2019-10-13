import React, {Component} from 'react';
import fetchData from '../../services/fetchData';
import { GET_POSTS_API } from '../../constants/serverUrls';
import PostSummary from '../../CommonComponents/PostSummary';
import LoadingIndicator from '../../CommonComponents/LoadingIndicator';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import ErrorBoundaryV2 from '../../HigherOrderComponents/ErrorBoundaryV2';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllPosts } from '../../redux/actions/postActions';

class Home extends Component {

    // state = {
    //     posts: [],
    // };

    componentDidMount() {
        this.props.loadPostData();
    }

    // loadPostData = async () => {
    //     try {
    //         const posts = await fetchData(GET_POSTS_API, "GET");
    //         this.setState({ posts });
    //     } catch (e) {
    //         console.error(e);
    //     }
    // };

    render() {
        const { posts } = this.props;

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

const mapStateToProps = state => { // Sending data from store into react component
    return {
        posts: state.posts,
    };
};

const mapDispatchToProps = dispatch => { // Sending the actions we created into the react component
    return {
        loadPostData: bindActionCreators(getAllPosts, dispatch)
    };
};

const connectHOC = connect(
    mapStateToProps, 
    mapDispatchToProps // optional
);

export default connectHOC(ErrorBoundaryV2(Home));

/**

// Normal HOC
function (ReactComponent) {
    return ImprovedReactComponent;
}

// connect HOC
function( function1, function2 ) {
    return function (ReactComponent) {
        return ImprovedReactComponent;
    }
}

*/