import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
 
var bgColors = { "Default": "#81b71a",
                 "Blue": "#00B1E1",
                 "White": "#FFFF"

};

class Table1 extends Component {
  render() {
    return (
      <div style={{backgroundColor: bgColors.White}}>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='id' width="11">
            No
          </TableHeaderColumn>
          <TableHeaderColumn dataField='date' width="30">
            Tanggal
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name' width="20">
            Nama
          </TableHeaderColumn>
          <TableHeaderColumn dataField='entering' width="20">
            Pemasukan
          </TableHeaderColumn>
          <TableHeaderColumn dataField='export' width="20">
            Pengeluaran
          </TableHeaderColumn>
          <TableHeaderColumn dataField='total' width="20">
            Total
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
 
export default Table1;