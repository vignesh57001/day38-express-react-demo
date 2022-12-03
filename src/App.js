import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const [products, setProducts] = useState([]);
  const [pName, setPname] = useState("");
  const [pPrice, setPprice] = useState(0);

  const getDashboardData = async () => {
    const dashData = await axios.get("http://localhost:3000/dashboard");
    setData(dashData.data.message);
  };
  const getServiceData = async () => {
    const servData = await axios.get("http://localhost:3000/service");
    setData(servData.data.message);
  };

  const getProductsData = async () => {
    const prodData = await axios.get("http://localhost:3000/products");
    setProducts(prodData.data);
  };
  const adddProductsData = async () => {
    const addData = await axios.post("http://localhost:3000/create-product", {
      name: pName,
      price: pPrice,
    });
    alert("product added");
  };
  return (
    <div className="App">
      <button onClick={getDashboardData}>Get Dashboard Data</button>
      <button onClick={getServiceData}>Get Service Data</button>
      <br />
      {data}
      <br />
      <br />
      <br />
      <br />
      <input
        type={"text"}
        value={pName}
        onChange={(e) => setPname(e.target.value)}
      />
      <input
        type={"text"}
        value={pPrice}
        onChange={(e) => setPprice(e.target.value)}
      />
      <button onClick={adddProductsData}> Add product</button>
      <button onClick={getProductsData}>Get products Data</button>

      <ul>
        {products.map((item) => {
          return (
            <li>
              {item.name} - {item.price}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
