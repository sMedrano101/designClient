import React from 'react';
import "../Post.css";

function Post(props) {

     let {urls} = props;

    let sizePost = "medium"; /*CREATING THE SIZE OF THE POST.  */
    return (
        <div className= "post">
            <div className="post_container">
                <div className={`post_container ${sizePost}`}>
                <img
                src={urls?.regular} //don't forget question mark.
                alt="computer blue fan"
                />


                </div>
            </div>
        </div>
    )
}

export default Post
