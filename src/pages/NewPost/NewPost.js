import React, {useState} from "react";
import PostInputField from "../../CommonComponents/PostInputField";
import PostTextArea from "../../CommonComponents/PostTextArea";
import ErrorBoundaryV2 from "../../HigherOrderComponents/ErrorBoundaryV2";
import { sendData } from "../../services/fetchData";
import uuidv4 from 'uuid/v4';
import { CREATE_NEW_POST } from "../../constants/serverUrls";
import LoadingIndicator from "../../CommonComponents/LoadingIndicator";

const NewPost = () => {

    const [authorName, setAuthorName] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [noOfLines, setNoOfLines] = useState(0);
    const [isLoading, setLoading] = useState(false);

    const onSubmit = () => {
        setLoading(true);
        const date = new Date();
        const epoch = (date.getTime()/1000).toFixed(0).toString();
        const requestBody = {
            id: uuidv4(),
            author: authorName,
            title,
            content,
            datetime: epoch,
        };
        sendData(CREATE_NEW_POST, "POST", requestBody)
        .then(data => {
            clearInputFields();
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
            setLoading(false);
        });
    }

    const clearInputFields = () => {
        setTitle("");
        setAuthorName("");
        setContent("");
        setNoOfLines(0);
    };

    return (
        <div className="container">
            <PostInputField
                className={'author-name-input'}
                id={'author'}
                onChange={event => setAuthorName(event.target.value)}
                title={"Author Name"}
                value={authorName}
            />

            <PostInputField
                className={'post-title-input'}
                id={'post-title'}
                onChange={event => setTitle(event.target.value)}
                title={"Title:"}
                value={title}
            />

            <PostTextArea
                content={content}
                editContent={event => setContent(event.target.value)}
                noOfLines={noOfLines}
            />

            {
                isLoading
                ?
                <LoadingIndicator/>
                :
                <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={onSubmit}>Submit Post</button>
            }
        </div>
    )
};

export default ErrorBoundaryV2(NewPost);