import React from "react";


const TableHeader = (props) => {
  let thTags = [];
  let headers = props.tableheaders.split(' ');

  for (let i = 0; i < headers.length; i++) {
    console.log(headers[i]);
    thTags.push(<th key={i}>{headers[i]}</th>);
  }

  return (
    <thead>
      <tr>
        {thTags}
      </tr>
    </thead>
  );
}

const TableRow = (props) => {
  const vehicle = props.vehicle;
  return (
    <tr key={vehicle.id}>
      <td>{vehicle.id}</td>
      <td>{vehicle.license}</td>
      <td>{vehicle.latlong}</td>     
    </tr>
  );

}


const TableBody = (props) => {
  const rows = props.tableData.map((row, index) => {
    return (
      // <tr key={index}>
      //   <td>{row.id}</td>
      //   <td>{row.license}</td>
      // </tr>

      <TableRow key={index} vehicle={row} removeTableItem={props.removeTableItem}  />
    )
  })

  return <tbody>{rows}</tbody>

}

export const Table = (props) => {

  return (
    <table className="table">
      <TableHeader tableheaders={props.tableHeaders} />
      <TableBody tableData={props.tableData} removeTableItem={props.removeTableItem} />
    </table>
  );
}



