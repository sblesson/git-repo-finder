import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

class RepoItem extends Component {
  render() {
    console.log(this.props);
    const { id, name, full_name, homepage, url } = this.props;

    if (!full_name) {
      return null;
    }

    return (
      <Table.Row key={id} data-test='repoItemComponent'>
        <Table.Cell data-test='repoItemId'>{id}</Table.Cell>
        <Table.Cell data-test='repoItemName'>{name}</Table.Cell>
        <Table.Cell data-test='repoItemFullName'>{full_name}</Table.Cell>
        <Table.Cell data-test='repoItemHomePage'>{homepage}</Table.Cell>
        <Table.Cell data-test='repoItemURL'>{url}</Table.Cell>
      </Table.Row>
    );
  }
}

RepoItem.propTypes = {
  full_name: PropTypes.string,
  url: PropTypes.string,
};

export default RepoItem;
