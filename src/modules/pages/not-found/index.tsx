import classNames from 'classnames';

import styles from './not-found.module.css';

function NotFoundPage() {
  return (
    <section className={classNames(styles.page)}>
      <div className="container">
        <p>404 Not Found</p>
      </div>
    </section>
  );
}

export default NotFoundPage;
