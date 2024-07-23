import React from "react";
import TableHeader from "../components/tableHead.component";
import useSWR from "swr";
import { Link } from "react-router-dom";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = () => {
  const { data, error } = useSWR("http://localhost:3001/data", fetcher);

  if (error) return <h1>error</h1>;

  return (
    <div className="home__section">
      <table class="table-auto">
        <TableHeader />
        <tbody className="table__body">
          {data ? (
            data.map((user) => {
              let textColorClass = "";
              if (user.review === "Neutral") {
                textColorClass = "text-orange-500";
              } else if (user.review === "Positive") {
                textColorClass = "text-green-500";
              } else if (user.review === "Negative") {
                textColorClass = "text-red-500";
              }
              return (
                <tr>
                  <td className="w-[300px]">
                    <div className="flex pl-[10px] items-center gap-1">
                      <div className="w-[100px] flex justify-center">
                        <img
                          src={`${user.file}`}
                          className="w-[50px] rounded-lg"
                          alt=""
                        />
                      </div>
                      <div className=" flex justify-center">
                        <p> {user.name}</p>
                      </div>
                    </div>
                  </td>
                  <td>{user.function}</td>
                  <td className={textColorClass}>{user.review}</td>
                  <td>{user.email}</td>
                  <td>{user.date}</td>
                  <td>{user.id}</td>
                  <Link to={"/add-user"} className="">
                    <button className=" my-5">ADD</button>
                  </Link>
                </tr>
              );
            })
          ) : (
            <h1>Loading</h1>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
