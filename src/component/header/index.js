import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core/';
import styles from './styles';

const Header = () => {
  return (
    <AppBar position='static' data-test='headerComponent'>
      <Toolbar>
        <Typography
          variant='h6'
          style={styles.headerTitle}
          data-test='headerTitle'
        >
          Git Repo Finder
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
