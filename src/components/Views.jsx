import axios from 'axios';
import React, { useEffect, useState } from 'react';

const View = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/mission.json")
      .then((response) => {
        changeData(response.data);
      })
      .catch();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          {data.map((value, index) => {
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 g-3" key={index}>
                <div className="card h-100">

                  <img
                    src={value.image}
                    className="card-img-top"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      padding: "10px"
                    }}
                    alt={value.missionName}
                  />

                  <div className="card-body">
                    <h5 className="card-title text-center">
                      <strong>{value.missionName}</strong>
                    </h5>

                    <p className="card-text">
                      <strong>Agency:</strong> {value.agency} <br />
                      <strong>Destination:</strong> {value.destination} <br />
                      <strong>Launch Year:</strong> {value.launchYear} <br />
                      <strong>Budget:</strong> ₹{value.budget} Crores <br />
                      <strong>Status:</strong> {value.status}
                    </p>

                    <div className="text-center">
                      <button className="btn btn-primary">
                        View Mission
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default View;