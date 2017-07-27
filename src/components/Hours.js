import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Hours extends Component {
  render() {
    return (
      <Table responsive>
          <thead>
            <tr>
              <th>Day</th>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>10:00 am - 5:30 pm</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>11:00 am - 5:30 pm</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>10:00 am - 5:30 pm</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>11:00 am - 5:30 pm</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>9:00 am - 3:00 pm</td>
            </tr>
            <tr>
              <td>Evenings & Saturday</td>
              <td>By Appointment</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>Closed</td>
            </tr>
          </tbody>
        </Table>
    );
  }
}

export default Hours;

