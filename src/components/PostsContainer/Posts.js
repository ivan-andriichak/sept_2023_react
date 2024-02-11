import {useEffect, useState} from "react";
import {postService} from "../../services/postService";
import {Post} from "./Post";
import {PostDetails} from "./PostDetails";
import css from './Posts.module.css'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null)

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    return (
        <div className={css.blockMain}>
            <div className={css.blockPosts}>
                {posts.map(post => <Post key={post.id} post={post} setPostDetails={setPostDetails}/>)}
            </div>
            <div className={css.blockPostDetails}>
                {postDetails && <PostDetails postDetails={postDetails}/>}
            </div>
        </div>
    );
}

export {Posts};