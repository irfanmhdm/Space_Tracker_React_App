import React from 'react'

const Addmission = () => {
  return (
    <div>

      <div className="container border border-2 rounded shadow p-5 mt-5">
        <div className="row">
          <div className="col-12">

            <div className="row g-3">

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Mission ID</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Mission Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Agency</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Launch Vehicle</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Destination</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Mission Type</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Budget (in Crores)</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Launch Year</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Status</label>
                <select className="form-select">
                  <option>Select Status</option>
                  <option>Planned</option>
                  <option>Upcoming</option>
                  <option>Active</option>
                  <option>Completed</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Image URL</label>
                <input type="url" className="form-control" />
              </div>

              <div className="col-12">
                <label className="form-label">Description</label>
                <textarea className="form-control" rows="3"></textarea>
              </div>

              <div className="col-12 text-center mt-3">
                <button className="btn btn-success px-5">
                  Add Mission
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Addmission