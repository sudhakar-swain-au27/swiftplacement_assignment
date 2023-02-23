import React from 'react';
import './ResponsiveTable.css';
import ReactTable from "react-table";

export default function ResponsiveTable(props) {
  const {headings, rows} = props;
  return <div className="responsive-table-container">
    <ReactTable  
      data={this.state.title}  
      columns={rows}  
   />
  </div>
}