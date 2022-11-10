const GymCard = ({ gym }) => {
  return (
    <div className="p-2 col-3  ">
      <div
        className="card shadow rounded-4 border border-white"
        style={{ height: "100%" }}
      >
        <img
          className="card-img-top w-50 mx-auto"
          src={gym["logo_img_url"]}
          alt="Card image cap"
        />
        <div className="card-body">
          <p className="card-text">{gym["name"]}</p>
        </div>
        {gym["is_hot_deal"] === true && (
          <div className="card-footer bg-success text-white border rounded-bottom-5  border-white">
            Hot Deals
          </div>
        )}
      </div>
    </div>
  );
};

export default GymCard;
