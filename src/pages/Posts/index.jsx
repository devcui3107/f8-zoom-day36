import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Loading from "../../components/Loading";
import styles from "./Posts.module.scss";
import Pagination from "../../components/Pagination";

function Posts() {
  const navigate = useNavigate();
  const [param, setParam] = useSearchParams();
  const [data, setData] = useState(null);
  const [statusLoading, setStatusLoading] = useState(false);
  const [numPage, setNumPage] = useState(() => +param.get("page") || 1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatusLoading(true);
    }, 200);

    fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${numPage}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setStatusLoading(false);
      })
      .finally(() => clearTimeout(timer));

    // Cleanup
    return () => clearTimeout(timer);
  }, [numPage]);

  useEffect(() => {
    setParam({ page: numPage });
  }, [numPage, setParam]);

  // Function Support
  const openDetailPost = (postId) => {
    navigate(`/posts/${postId}`);
  };

  return (
    <div className={styles.posts}>
      <div className={styles.postsHeader}>
        <h2 className={styles.postsTitle}>Latest Posts</h2>
        <p className={styles.postsDesc}>
          Keep up with our latest tutorials, guides, and insights on React and
          web development.
        </p>
      </div>
      <div className={styles.postsList}>
        {data
          ? data.map((post) => (
              <div
                key={post.id}
                className={styles.postItem}
                onClick={() => openDetailPost(post.id)}
              >
                <h3
                  className={styles.postTitle}
                >{`${post.id}. ${post.title}`}</h3>
              </div>
            ))
          : statusLoading && <Loading />}
      </div>

      {/* Paging */}
      <Pagination
        currentPage={numPage}
        totalPages={5}
        onPageChange={(page) => setNumPage(page)}
      />
    </div>
  );
}

export default Posts;
