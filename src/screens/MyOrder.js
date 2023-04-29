import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyOrder() {
  const [orderData, setorderData] = useState({});

  const fetchMyOrder = async () => {
    await fetch("http://localhost:5000/api/myOrderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    }).then(async (res) => {
      let response = await res.json();
      await setorderData(response);
    });
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div >
        <div className="container">
          {orderData !== {}
            ? Array(orderData).map((data) => {
                return data.orderData
                  ? data.orderData.order_data
                      .slice(0)
                      .reverse()
                      .map((item) => {
                        return item.map((arrayData) => {
                          return (
                            <div >
                              {arrayData.Order_date ? (
                                <div className="row md-3 fs-3 m-3">
                                  {(data = arrayData.Order_date)}
                                  <hr />
                                </div>
                              ) : (
                                <div className="container">
                                  <div
                                    className="row card mt-3 "
                                    style={{
                                      width: "300px",
                                      maxHeight: "360px",
                                    }}
                                  >
                                    <div className="card-body col">
                                      <img
                                        src={arrayData.img}
                                        className="card-img-top "
                                        alt="..."
                                        style={{
                                          height: "170px",
                                          objectFit: "fill",
                                        }}
                                      />
                                      <div>
                                        <h5>{arrayData.name}</h5>
                                        <div style={{ height: "38px" }}>
                                          <span>{arrayData.qty}</span>
                                          <span>{arrayData.size}</span>
                                          <span>{data}</span>
                                          <div>₹{arrayData.price}/-</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        });
                      })
                  : "";
              })
            : ""}
        </div>
      </div>

      <Footer />
    </div>
  );
}
