import { useEffect, useState } from "react";
import styles from "./PostDetail.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";

function PostDetail() {
  const param = useParams();
  const postId = param.id;
  const [postDetail, setPostDetail] = useState(null);
  const [postComment, setPostComment] = useState(null);
  const [loadingComments, setLoadingComments] = useState(true);
  const navigate = useNavigate();

  // Lấy ra Chi tiết bài viết
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((post) => {
        setPostDetail(post);
      })
      .catch((error) => console.log(error));
  }, [postId]);

  // Lấy ra Chi tiết comment của bài viết
  useEffect(() => {
    setLoadingComments(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => res.json())
      .then((commentPost) => {
        setPostComment(commentPost);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoadingComments(false));
  }, [postId]);

  // Loading bài viết
  if (!postDetail) return <Loading />;

  return (
    <div className={styles.postDetail}>
      <h2 className={styles.postTitle}>{postDetail.title}</h2>
      <p className={styles.postBody}>{postDetail.body}</p>
      <p className={styles.postUser}>POST ID: {postDetail.id}</p>

      <div className={styles.comments}>
        <h3 className={styles.commentsTitle}>Comments</h3>
        {loadingComments ? (
          <Loading />
        ) : postComment && postComment.length > 0 ? (
          <div className={styles.commentList}>
            {postComment.map((cmt) => (
              <div key={cmt.id} className={styles.commentItem}>
                <h4 className={styles.commentName}>{cmt.name}</h4>
                <p className={styles.commentEmail}>{cmt.email}</p>
                <p className={styles.commentBody}>{cmt.body}</p>
              </div>
            ))}
          </div>
        ) : (
          navigate("/posts", { replace: true }) // Chuyển về posts nếu no data
        )}
      </div>
    </div>
  );
}

export default PostDetail;
