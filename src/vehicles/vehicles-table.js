import React from "react";

class VehicleRow extends React.Component {
  render() {
    const vehicle = this.props.vehicle;
    return (
      <tr>
        <td>{vehicle.id}</td>
        <td>{vehicle.license}</td>
        <td>{vehicle.latlong}</td>
      </tr>
    );
  }
}

export class VehicleTable extends React.Component {
  render() {
    const rows = [];
    this.props.vehicles.forEach((vehicle) => {
      
        rows.push(
          <VehicleRow key={vehicle.id} vehicle={vehicle} />
        );      
    });

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>License</th>
            <th>LatLon</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}



