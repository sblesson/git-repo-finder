import React from 'react';
import { Table } from 'semantic-ui-react';

const TableHeader = () => {
  return (
    <Table.Header data-test='tableHeaderComponent'>
      <Table.Row>
        <Table.HeaderCell data-test='tableHeaderId'>Id</Table.HeaderCell>
        <Table.HeaderCell data-test='tableHeaderName'>Name</Table.HeaderCell>
        <Table.HeaderCell data-test='tableHeaderFullName'>
          Full Name
        </Table.HeaderCell>
        <Table.HeaderCell data-test='tableHeaderHomePage'>
          Home Page
        </Table.HeaderCell>
        <Table.HeaderCell data-test='tableHeaderURL'>URL</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};

export default TableHeader;
