import { Space, Table, Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./cart.css";

const { Column } = Table;

const Cart = () => {
  const [data, setData] = useState([
    {
      key: "1",
      title: "Product 1",
      images: "Image 1",
      count: 2,
      price: 10,
      id: "product-1",
    },
    {
      key: "2",
      title: "Product 2",
      images: "Image 2",
      count: 1,
      price: 20,
      id: "product-2",
    },
    // Add more items here
  ]);

  return (
    <div className="cart">
      <Table dataSource={data}>
        <Column title="Title" dataIndex="title" key="title" />
        <Column title="Images" dataIndex="images" key="images" />
        <Column
          title="Quantity"
          dataIndex="count"
          key="count"
          render={(count, record) => (
            <Space>
              <span>+</span>
              <span>{count}</span>
              <span>-</span>
            </Space>
          )}
        />
        <Column
          title="Price"
          dataIndex="price"
          key="price"
          render={(price, record: any) => (
            <span>${(price * record.count).toFixed(2)}</span>
          )}
        />
        <Column
          title="Actions"
          dataIndex="id"
          key="id"
          render={(id) => <span>Delete</span>}
        />
      </Table>
      {/* <span>Total: ${totalAmount.toFixed(2)}</span> */}
      <span>
        <Link to="/product">Update cart</Link>
      </span>
    </div>
  );
};

export default Cart;
