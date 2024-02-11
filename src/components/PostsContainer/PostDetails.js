
const PostDetails = ({postDetails:{id, userId, title, body}}) => {
    return (
        <div>
            <div><span>id</span>: {id}</div>
            <div><span>userId</span>: {userId}</div>
            <div><span>title</span>: {title}</div>
            <div><span>body</span>: {body}</div>
        </div>
    );
};


export {PostDetails};