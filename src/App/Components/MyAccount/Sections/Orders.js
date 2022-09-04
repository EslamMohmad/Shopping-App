import React from "react";

const Orders = () => {
  return (
    <div className="orders col-xxl-9">
      <h3 className="mb-4">orders</h3>
      <div className="orders_table">
        <table className="table mb-0" style={{ borderCollapse: "unset" }}>
          <thead>
            <tr>
              <th scope="col">order</th>
              <th scope="col">data</th>
              <th scope="col">status</th>
              <th scope="col">total</th>
              <th scope="col">actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">#3203</th>
              <td>March 18, 2021</td>
              <td>Completed</td>
              <td>$16,950.00 for 93 items</td>
              <td>
                <button className="btn btn-dark">view</button>
              </td>
            </tr>
            <tr>
              <th scope="row">#3204</th>
              <td>March 18, 2021</td>
              <td>Completed</td>
              <td>$16,950.00 for 93 items</td>
              <td>
                <button className="btn btn-dark">view</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
