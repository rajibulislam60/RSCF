import React from "react";
import Container from "../components/Container";

const Notices = () => {
  let noticeData = [
    {
      id: 1,
      name: "Area Co-Ordinator",
      description:
        "Program co-ordinators need a combination of education, skills, and experience to manage projects and programs. ",
      date: "28/02/2025",
    },
  ];

  return (
    <div>
      <Container>
        <div className=" p-8 ">
          <div className="">
            <h2 className="text-4xl font-bold mb-8">All Notices</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {noticeData.map((item) => (
                <div className="bg-gray-100 rounded-lg text-black shadow-md p-6">
                  <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3 w-16 h-16">
                    <svg
                      className="h-8 w-8 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="mt-4">
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-sm mt-2">{item.description}</p>
                    <p className=" text-sm mt-2">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Notices;
