import React from "react";
import Container from "../components/Container";

const About = () => {
  return (
    <section>
      <Container>
        <div className="mt-5">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Who We Are</h3>
            <h2 className="text-3xl font-bold mt-3">
              Empowering Student Growth.
            </h2>
            <h2 className="text-3xl font-bold mt-1">
              Building Essential Skills.
            </h2>
            <p className="text-[16px] font-normal leading-[20px] mt-5 mb-10 text-gray-700">
              Rise Students Career Forum (RSCF) is a dynamic platform dedicated
              to empowering students with the knowledge, skills, and
              opportunities they need to build successful careers. Founded with
              a vision to bridge the gap between academic learning and
              real-world industry demands, RSCF provides guidance, mentorship,
              and hands-on experiences to help students excel in their chosen
              fields. At RSCF, we believe that every student has the potential
              to achieve greatness when given the right support. Our initiatives
              include career counseling, skill development workshops, networking
              events, and internship opportunities designed to equip students
              with practical expertise. Whether you're exploring career options,
              preparing for job placements, or seeking mentorship, RSCF is here
              to guide you every step of the way. <br />
              <br />
              Join us in shaping a future where students are not just job
              seekers but innovators and leaders of tomorrow.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
