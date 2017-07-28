import React from 'react';
import { Media, Table } from 'react-bootstrap';

class ServiceCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}

class ServiceRow extends React.Component {
  render() {
    return (
      <tr>
        <td width="33%">{this.props.service.name}</td>
        <td width="33%">{this.props.service.price}</td>
      </tr>
    );
  }
}

class ServiceTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;
    this.props.services.forEach(function(service) {
      if (service.category !== lastCategory) {
        rows.push(<ServiceCategoryRow category={service.category} key={service.category} />);
      }
      rows.push(<ServiceRow service={service} key={service.name} />);
      lastCategory = service.category;
    });
    return (
      <Media>
        <Media.Left>
          <img width={64} height={64} src={this.props.image} alt="Service"/>
        </Media.Left>
        <Media.Body>
        <Table responsive>
          <tbody>
            {rows}
          </tbody>
        </Table>
        </Media.Body>
      </Media>
    );
  }
}

export default ServiceTable;

