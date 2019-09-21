import React, {Component} from 'react';
import fetchData from '../../services/fetchData';
import { GET_POSTS_API } from '../../constants/serverUrls';

class Home extends Component {

    componentDidMount() {
        this.loadPostData();
    }

    loadPostData = async () => {
        try {
            const posts = await fetchData(GET_POSTS_API, "GET");
            console.log(posts);
        } catch (e) {
            console.error(e);
        }
    };

    render() {
        return (
            <div>Home!</div>
        );
    }
}

export default Home;