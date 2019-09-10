import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
 
var bgColors = { "Default": "#81b71a",
                 "White": "#FFFF"
}
class Table1 extends Component {
  render() {
    return (
      <div style={{backgroundColor: bgColors.White}}>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='id' width="5">
            No
          </TableHeaderColumn>
          <TableHeaderColumn dataField='group' width="30">
            Group
          </TableHeaderColumn>
          <TableHeaderColumn dataField='total' width="30">
            Total
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
 
export default Table1;