import React, {useState} from "react";
import PostInputField from "../../CommonComponents/PostInputField";
import PostTextArea from "../../CommonComponents/PostTextArea";

const NewPost = () => {

    const [authorName, setAuthorName] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [noOfLines, setNoOfLines] = useState(0);

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
        </div>
    )
};

export default NewPost;