import React, { Component } from 'react';

class Services extends Component {
  render() {
    return (
      <div>
        <h2>Services</h2>
        <table className="table table-inverse table-bordered">
          <thead>
            <tr>
              <th>Service</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Women's haircutand style</td>
              <td>Starting at $30</td>
              <td></td>
            </tr>
            <tr>
              <td>Men's haircut</td>
              <td>Starting at 18</td>
              <td></td>
            </tr>
            <tr>
              <td>Children's haircut</td>
              <td>Starting at $15</td>
              <td>12 and under</td>
              </tr>
              <tr>
              <td>Shampoo and blow dry</td>
              <td>Starting at $20</td>
              <td></td>
            </tr>
            <tr>
            <td>Special Ocasions</td>
              <td>Starting at $50</td>
              <td></td>
              </tr>
              <tr>
              <td>Hair coloring</td>
              <td>Starting at $57</td>
              <td></td>
              </tr>
              <tr>
              <td>Highlighting</td>
              <td>Starting at $72</td>
              <td></td>
              </tr>
              <tr>
              <td>Highlighting and coloring</td>
              <td>Starting at $82</td>
              <td></td>
              </tr>
              <tr>
              <td>Hair extensions</td>
              <td>Priced upon consulation</td>
              <td></td>
              </tr>
              <tr>
              <td>Hair smoothing treatment</td>
              <td>Starting at $150</td>
              <td></td>
              </tr>
              <tr>
              <td>Eyebrow waxing</td>
              <td>$15</td>
              <td></td>
              </tr>
              <tr>
              <td>Upper lip waxing</td>
              <td>$10</td>
              <td></td>
              </tr>
              <tr>
              <td>Nasal Waxing</td>
              <td>$10</td>
              <td></td>
              </tr>
              <tr>
              <td>Chin waxing</td>
              <td>$10</td>
              <td></td>
              </tr>
              <tr>
              <td>Full face</td>
              <td>$35</td>
              <td></td>
              </tr>
          </tbody>
        </table>
      </div>
  );
  }
}

export default Services;

