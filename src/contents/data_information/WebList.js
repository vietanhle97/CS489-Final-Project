import websites from "../../data/websites";
import { Accordion, Card } from "react-bootstrap";
import ToggleCard from "../../components/toggle_card/ToggleCard";

function WebList() {

  const weblist = websites.map((web, idx) => {
    const eventKey = idx.toString();
    const id = "heading" + eventKey;
    const ariaControls = "collapse" + eventKey;
    const dataTarget = "#collapse" + eventKey;
  
    return(
      <ToggleCard header={web["name"]} data={web["data"]} eventKey={eventKey} id={id} ariaControls={ariaControls} dataTarget={dataTarget} ariaLabelledby={id}></ToggleCard>
    );
  });

  return(
    <div className="container-fluid">
      <h1 className="web-list-title mt-4">Website</h1>
      <div className="web-list-subtitle">
        Do you know what types of data are being collected when you surf through websites? 
      </div>
      <div className="web-list-subtitle">
        If you don’t have time to go through a long list of privacy policies. Find out more below.
      </div>
      <div className="container-fluid weblist flex-row align-self-stretch d-flex">
        <div className="col-lg-9 mx-auto">
          <Accordion id="accordionExample" className="shadow">
            {weblist}
      </Accordion>
    </div>
  </div>
</div>

  ); 
}

export default WebList;