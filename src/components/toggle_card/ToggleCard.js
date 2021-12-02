import { Component } from "react";
import { Card, Accordion, Table } from "react-bootstrap";

class ToggleCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const rows = this.props.data.map((row) => {
      const name = row["name"];
      const info = row["info"];
      return (
        <tr>
          <td>{name}</td>
          <td>{info}</td>
        </tr>
      );
    });
    return (
      <Card className={this.props.NameClass}>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.eventKey} id={this.props.id} className="toggle-card shadow-sm border-0">
        <h6 className="mb-0 font-weight-bold">
          <div data-toggle="collapse" data-target={this.props.dataTarget} aria-expanded="true" aria-controls={this.props.ariaControls} className="d-block position-relative text-light text-uppercase collapsible-link py-2">{this.props.header}
          </div>
        </h6>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.eventKey} id={this.props.id} aria-labelledby={this.props.ariaLabelledBy} data-parent="#accordionExample" >
          <Card.Body className="toggle-card-body">
          <Table size="sm">
            <thead>
              <tr>
                <th>Information</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {rows}  
            </tbody>
        </Table>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}


export default ToggleCard;