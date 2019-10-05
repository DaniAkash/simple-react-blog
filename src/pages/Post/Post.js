import React, { Component, Fragment } from 'react';
import fetchData from '../../services/fetchData';
import { GET_POST_BY_ID_API } from '../../constants/serverUrls';
import PostSummary from '../../CommonComponents/PostSummary';
import LoadingIndicator from '../../CommonComponents/LoadingIndicator';
import ErrorBoundaryV2 from '../../HigherOrderComponents/ErrorBoundaryV2';
import { withRouter } from 'react-router-dom';

class Post extends Component {
  
  state = {
    id: "",
    title: "",
    content: "",
    datetime: "",
    author: ""
  };
  _timeoutReference;

  componentDidMount() {
    const { match = {} } = this.props;
    const { params = {} } = match;
    const { id: postId = "" } = params;

    fetchData(GET_POST_BY_ID_API.replace(":id", postId))
      .then(data => {
        this.setState({
          id: data.id,
          title: data.title,
          content: data.content,
          datetime: data.datetime,
          author: data.author,
        })
      })
      .catch(error => {
        console.error(error);
      })

    this.startPopUpTimer();
  }

  componentWillUnmount() {
    this.clearPopUpTimer();
  }

  startPopUpTimer = () => {
    this._timeoutReference = setTimeout(() => {
      alert("Subscribe to our news letter!");
    }, 10000);
  };

  clearPopUpTimer = () => {
    clearTimeout(this._timeoutReference);
  };

  render() {
    const {
      id = "",
      title = "",
      content = "",
      datetime = "",
      author = ""
    } = this.state;

    return (
        <Fragment>
          {
            id 
            ?
              <PostSummary
                id={id}
                title={title}
                content={content}
                datetime={datetime}
                author={author}
              />
            :
              <LoadingIndicator/>
          }
        </Fragment>
    );
  }

}

export default ErrorBoundaryV2(withRouter(Post));