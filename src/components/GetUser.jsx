import { useState, useEffect } from "react";
import axios from "axios";
function GetUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inventory, setIntory] = useState([]);

  useEffect(() => {
    async function getUser() {
      const inventories = await axios.get(
        "http://127.0.0.1:8000/api/inventories"
      );

      setIntory(inventories.data);
      setLoading(true);
    }
    getUser();
  }, []);

  if (!loading) {
    return <p>Loading data.......</p>;
  }

  return (
    <div>
      <h1>Inventories</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Stocks</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((items) => {
            return (
              <tr>
                <td>{items.id}</td>
                <td>{items.product_name}</td>
                <td>{items.price}</td>
                <td>{items.stocks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default GetUser;
