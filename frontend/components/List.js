import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

const List = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get(process.env.URL);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    getData();
  };

  return (
    <>
      <h1>belajar benar</h1>
      <Link href="/AddUser">
        <button className="hijau-btn">Create</button>
      </Link>
      {data.map((item, index) => {
        return (
          <div key={item._id}>
            <div className="box">
              <div className="box-left">
                <h1>
                  <span>{index + 1}.</span>
                  {item.name}
                </h1>
              </div>
              <div className="box-right">
                <h1>{item.email}</h1>
              </div>
              <div className="btn">
                <Link href={`${item._id}`}>
                  <button className="blue-btn">edit</button>
                </Link>
                <button onClick={() => deleteUser(item._id)}>delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
