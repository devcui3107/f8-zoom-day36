import clsx from "clsx";
import styles from "./Pagination.module.scss";
import Button from "../Button";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handleFirstPage = () => {
    onPageChange(1);
  };

  const handleLastPage = () => {
    onPageChange(totalPages);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <Button
        onClick={handleFirstPage}
        className={styles.paginationBtn}
        noShadow
        disabled={currentPage === 1}
      >
        First
      </Button>
      <Button
        onClick={handlePrevPage}
        className={styles.paginationBtn}
        noShadow
        disabled={currentPage === 1}
      >
        &larr;
      </Button>

      {Array(totalPages)
        .fill()
        .map((_, index) => {
          const pageNum = index + 1;
          const isActive = currentPage === pageNum;

          return (
            <span
              key={pageNum}
              className={clsx(styles.paginationInfo, {
                [styles.active]: isActive,
              })}
              onClick={() => onPageChange(pageNum)}
            >
              {pageNum}
            </span>
          );
        })}

      <Button
        onClick={handleNextPage}
        className={styles.paginationBtn}
        noShadow
        disabled={currentPage === totalPages}
      >
        &rarr;
      </Button>
      <Button
        onClick={handleLastPage}
        className={styles.paginationBtn}
        noShadow
        disabled={currentPage === totalPages}
      >
        Last
      </Button>
    </div>
  );
}

export default Pagination;
