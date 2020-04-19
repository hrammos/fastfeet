// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Pagination from '@material-ui/lab/Pagination';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

// export default function BasicPagination() {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <Pagination count={10} />
//       <Pagination count={10} color="primary" />
//       <Pagination count={10} color="secondary" />
//       <Pagination count={10} disabled />
//     </div>
//   );
// }

import styled from 'styled-components';
import { darken } from 'polished';
import { Pagination as PaginationUi } from '@material-ui/lab';

const Pagination = styled(PaginationUi)`
  ul {
    margin: auto;
    width: 128px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button.MuiPaginationItem-page.Mui-selected {
    color: white;
    &.MuiPaginationItem-outlined {
      color: #fff;
    }
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      background: #7d40e7;
      color: #fff;
      &:hover {
        background: ${darken(0.1, '#7d40e7')};
        color: #fff;
      }
    }
  }
`;

export default Pagination;
