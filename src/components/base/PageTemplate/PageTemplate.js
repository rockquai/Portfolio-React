// import React from 'react';

// import styles from './PageTemplate.sass';
// import classNames from 'classnames/bind';
// const cx = classNames.bind(styles);

// const PageTemplate = ({ header, footer, children }) => {
//   return (
//     <div className={cx('page-template', 'show-grid')}>
//       {header}
//       <main>
//         {children}
//       </main>
//       {footer}
//     </div>
//   );
// };

// export default PageTemplate;


import React from 'react';

// import styles from './PageTemplate.sass';
// import classNames from 'classnames/bind';
// const cx = classNames.bind(styles);

const PageTemplate = ({ header, footer, children }) => {
  return (
    <div>
      {header}
      <main>
        {children}
      </main>
      {footer}
    </div>
  );
};

export default PageTemplate;


