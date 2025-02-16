import React from "react";
import Container from "./Container";

const CourseArea = () => {
  let courseData = [
    {
      id: 1,
      image: "https://readymadeui.com/images/food11.webp",
      name: "MERN Stack Development",
      topic:
        "Reactjs, Nodejs, Expressjs, Mongodb, React Native, Nextjs, so on...",
      price: "60,000",
    },
    {
      id: 2,
      image: "https://readymadeui.com/images/food11.webp",
      name: "Front-End Development with React.js",
      topic:
        "Figma, HTML, CSS, Bootstrap, TailwindCSS, JavaScript, React.Js, Api ...",
      price: "28,000",
    },
    {
      id: 3,
      image: "https://readymadeui.com/images/food11.webp",
      name: "Backend Development",
      topic: "JavaScript, Nodejs, Expressjs, Mongodb...",
      price: "38,000",
    },
    {
      id: 4,
      image: "https://readymadeui.com/images/food11.webp",
      name: "Full Stack Development",
      topic:
        "HTML, CSS,Bootstrap, TailwindCSS, JavaScript, Reactjs, Nodejs, Expressjs, Mongodb, so on...",
      price: "75,000",
    },
  ];
  return (
    <div>
      <Container>
        <div className="p-8 font-[sans-serif]">
          <div className="max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
            <div className="max-w-md mx-auto">
              <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center leading-tight">
                Our Course and Pricing
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
              {courseData.map((item) => (
                <div className="bg-white rounded overflow-hidden border-gray-400 border">
                  <img
                    src={item.image}
                    alt="Blog Post 1"
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.topic}</p>
                    <p className="text-gray-800 text-[13px] font-semibold mt-4">
                      Course Fee {item.price} BDT
                    </p>
                    <a
                      href="javascript:void(0);"
                      className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-yellow-600 hover:bg-yellow-700 text-white text-[13px]"
                    >
                      Click for Discount
                    </a>
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

export default CourseArea;
