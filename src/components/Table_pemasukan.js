import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
 
var bgColors = { "Default": "#81b71a",
                 "Blue": "#00B1E1",
                 "White": "#FFFF"

};

class Table_pemasukan extends Component {
  render() {
    return (
      <div style={{backgroundColor: bgColors.White}}>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='id' width="11">
            No
          </TableHeaderColumn>
          <TableHeaderColumn dataField='wallet_id' width="30">
            ID Wallet
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value' width="20">
            Value
          </TableHeaderColumn>
          <TableHeaderColumn dataField='category_id' width="20">
            ID Category
          </TableHeaderColumn>
          <TableHeaderColumn dataField='purpose' width="20">
            Purpose
          </TableHeaderColumn>
          <TableHeaderColumn dataField='sources' width="20">
            Sources
          </TableHeaderColumn>
          <TableHeaderColumn dataField='datetime_trx' width="20">
            Transaction Datetime
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
 
export default Table_pemasukan;