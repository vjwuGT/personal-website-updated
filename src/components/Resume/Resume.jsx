import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-body">
      <div className="resume-container">
        <main className="resume-main row">
          <section className="resume-col">
            <header className="resume-title">
              <h2>EDUCATION</h2>
            </header>
            <div className="resume-contents">
              <div className="resume-box">
                <h4>2021 - 2025</h4>
                <h3>Georgia Institute of Technology</h3>
                <span className="resume-detail">Bachelors of Science in Computer Science</span>
                <p>
                  Expected to graduate with a Bachelor's of Science in Computer Science May 2025. Specialization in Artificial Intelligence and Media.
                </p>
              </div>
              <div className="resume-box">
                <h4>2017 - 2021</h4>
                <h3>Liberty Sr. High School</h3>
                <span className="resume-detail">High School Diploma</span>
              </div>

            </div>
          </section>
          {/* Experience Section */}
          <section className="resume-col">
            <header className="resume-title">
              <h2>EXPERIENCE</h2>
            </header>
            <div className="resume-contents">
              <div className="resume-box">
                <h4>Summer 2024</h4>
                <h3>Amazon</h3>
                <span className="resume-detail">Software Development Engineer Intern</span>
                <p>
                  Received a return offer to work as a Software Development Engineer Intern at Amazon for Summer 2024.
                </p>
              </div>
              <div className="resume-box">
                <h4>Summer 2023</h4>
                <h3>Amazon</h3>
                <span className="resume-detail">Software Development Engineer Intern</span>
                <p>
                  Created Python tooling to replay and automate Amazon Robotics' algorithms from production in an offline setting.
                </p>
              </div>
              <div className="resume-box">
                <h4>May 2021 - September 2021</h4>
                <h3>Staples</h3>
                <span className="resume-detail">Technology Sales Associate</span>
                <p>
                  Provided customer service and technical support for Staples' technology products.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Resume;
