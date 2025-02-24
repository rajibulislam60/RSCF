import React from "react";
import Container from "../components/Container";

const Campus = () => {
  let officeData = [
    {
      id: 1,
      name: "Md. Rajibul Islam Rajib",
      email: "rajibulislam60707877@gmail.com",
      role: "COO",
      area: "BD",
    },
    {
      id: 2,
      name: "Rabbi Hossain",
      email: "rabbihossain4200@gmail.com",
      role: "Co-Ordinator",
      area: "Khagrachari",
    },
    {
      id: 3,
      name: "RI Rajveer",
      email: "rirajveer@gmail.com",
      role: "Co-Ordinator",
      area: "Dhaka",
    },
  ];
  return (
    <div>
      <Container>
        <div className="font-[sans-serif] overflow-x-auto py-8">
          <h2 className="font-bold text-2xl py-8">Campus Area Incharge</h2>
          <table className="min-w-full bg-white">
            <thead className="whitespace-nowrap">
              <tr>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Name
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Role
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Area
                </th>
              </tr>
            </thead>
            <tbody className="">
              {officeData.map((item) => (
                <tr className="odd:bg-blue-50">
                  <td className="py-4 text-sm">
                    <div className="flex items-center cursor-pointer w-max">
                      <div className="ml-4">
                        <p className="text-sm text-black">{item.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {item.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-black">{item.role}</td>
                  <td className="p-4">{item.area}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default Campus;
