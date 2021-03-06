import { Table } from "react-bootstrap";
import websites from "../../data/websites";

function HowWeMadeList() {

  const rows = websites.map((row) => {
    const name = row["name"];
    const link = row["link"];
    const privacy_policy = row["privacy_policy"];
    return (
      <tr>
        <td>{name}</td>
        <td>
          <a style={{display: "table-cell"}} href={link} target="_blank">{link}</a>
        </td>
        <td>
          <a style={{display: "table-cell"}} href={privacy_policy} target="_blank">{privacy_policy}</a>
        </td>
      </tr>
    );
  });

  return(
    <div className="container-fluid">
      <h1 className="page-title mt-4">How we made the list</h1>
      <div className="page-subtitle">
          We collected our data from the ‘data policy’ page in each website. We went through the long list of policies and sorted them.
      </div>
      <div className="page-subtitle">
          For more information, please use the link we provide in the table below.
      </div>
      <div className="how-we-made">
        <Table bordered className="how-we-made-table">
          <thead>
            <tr>
              <th className="how-we-made-table-header">Company</th>
              <th className="how-we-made-table-header">Website</th>
              <th className="how-we-made-table-header">Privacy Policy URL</th>
            </tr>
          </thead>
          <tbody>
            {rows}  
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default HowWeMadeList;