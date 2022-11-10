import { useEffect, useState } from "react";
import GymCard from "../GymCard/GymCard";

const GymList = () => {
  const [gyms, setGyms] = useState([]);
  useEffect(() => {
    fetch("https://staging.algym.com/api/v1/gyms", {
      method: "GET",
      headers: {
        app_token: `Berearey JhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJkZXZpY2UiOjE5fQ._tn9ZN3PkzaGKNnfrnodBX7i_t0CjRGDriqZ9hZJGM8`,
        lang: "en",
      },
    })
      .then((response) => response.json())
      .then((data) => setGyms(data.data));
  }, []);
  return (
    <>
      <p className="text-bold mt-3">All</p>
      <div className="row">
        {gyms.map((e) => (
          <GymCard key={e.id} gym={e} />
        ))}
      </div>
    </>
  );
};

export default GymList;
