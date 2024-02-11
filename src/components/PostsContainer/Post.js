import css from './Posts.module.css'


const Post = ({post, setPostDetails}) => {
    const {id, title} = post;

    return (
        <div className={css.blockPost}>
            <div>
                <div className={css.blockContent}>
                    <span>id</span>: {id}
                </div>

                <div>
                    <span>title</span>: {title}
                </div>
            </div>
            <button onClick={() => setPostDetails(post)} className={css.button}>Details</button>
        </div>
    );
};

export {Post};