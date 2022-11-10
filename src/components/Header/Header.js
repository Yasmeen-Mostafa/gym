import "./Header.css";
const Header = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-6 d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Search by gym name, facilities"
        />

        <button
          className="btn btn-outline-secondary py-3 px-4 rounded-0"
          type="button"
        >
          Filter
        </button>
        <button className="btn btn-danger py-1 px-4 rounded-0" type="button">
          FIND GYMS
        </button>
      </div>

      <button className="btn btn-color col-3 text-white" type="button">
        SWITCH TO MAP VIEW
      </button>
    </div>
  );
};

export default Header;
