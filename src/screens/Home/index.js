import React from 'react';
import { MenuItem, Select, Button, TextField, Grid } from '@material-ui/core/';

import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import Header from '../../component/header';
import TableHeader from '../../component/tableheader';
import RepoItem from '../../component/repoitem';

import { getGitRepoData } from '../../actions';
import styles from './styles';

export class Home extends React.Component {
  state = {
    searchTerm: '',
    language: '',
    count: 10,
  };
  handleOnchange = (event) => {
    let searchTerm = event.target.value;
    this.setState({ searchTerm: searchTerm });
  };
  handleOnchangeBody = (event) => {
    let language = event.target.value;
    this.setState({ language: language });
  };
  render() {
    const { repos } = this.props;
    console.log(repos.data);

    return (
      <div data-test='homeComponent'>
        <Header />
        <Grid container alignItems='center' justify='center'>
          <Grid item xs='auto'>
            <form noValidate autoComplete='off'>
              <TextField
                style={styles.searchText}
                onChange={this.handleOnchange.bind(this)}
                id='demo-text'
                label='Type search term'
              />
              <div style={styles.languageSelectDiv}>
                <Select
                  id='demo-select'
                  displayEmpty
                  value={this.state.language}
                  onChange={this.handleOnchangeBody.bind(this)}
                >
                  <MenuItem value=''>Select language</MenuItem>

                  <MenuItem value={'css'}>CSS</MenuItem>
                  <MenuItem value={'html'}>HTML</MenuItem>
                  <MenuItem value={'python'}>Python</MenuItem>
                  <MenuItem value={'ruby'}>Ruby</MenuItem>
                  <MenuItem value={'java'}>Java</MenuItem>
                  <MenuItem value={'javascript'}>JavaScript</MenuItem>
                </Select>
              </div>
              <div style={styles.searchButtonDiv}>
                <Button
                  onClick={() =>
                    this.props.getGitRepoData(
                      this.state.searchTerm,
                      this.state.language,
                      this.state.count
                    )
                  }
                  color='primary'
                  variant='contained'
                >
                  Search
                </Button>
              </div>
            </form>
          </Grid>
          <div style={styles.container} data-test='repoListWrapper'>
            {repos && repos.data && repos.data.items.length > 0 && (
              <Table striped>
                <TableHeader />
                {repos.data.items.length > 0 && (
                  <Table.Body>
                    {repos.data.items.map((repo, index) => {
                      return <RepoItem key={index} {...repo} />;
                    })}
                  </Table.Body>
                )}
              </Table>
            )}
          </div>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  repos: state.reposReducer.repos,
});

const mapDispatchToProps = (dispatch) => ({
  getGitRepoData: (searchTerm, language, count) =>
    dispatch(getGitRepoData(searchTerm, language, count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
