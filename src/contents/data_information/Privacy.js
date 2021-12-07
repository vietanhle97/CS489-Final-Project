import FlippingCard from "../../components/flipping_card/FlippingCard";

function Privacy() {
  return (
    <div className="container-fluid">
      <h1 className="page-title mt-4">Privacy</h1>
      <div className="page-subtitle">
        What are the potential data types that might threaten your privacy?  
      </div>
      <div className="page-subtitle">
        Are you aware of these data?
      </div>
      <div className="d-flex justify-content-center privacy-cards">
        <div className="d-flex flex-row">
          <div className="d-flex flex-row bd-highlight mb-3 ">
            <FlippingCard content="Privacy-sensitive Information?" isSensitive={true}></FlippingCard>
          </div>
          <div className="d-flex flex-row-reverse bd-highlight">
            <FlippingCard content="Non-sensitive Information?" isSensitive={false}></FlippingCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
