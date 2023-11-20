import React, { useState } from 'react';
import './EducationExperience.css';
import ar from '../../assets/ar.png';
import gt from '../../assets/gt.png';

const EducationExperience = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="about-container">

            <div className="greeting">
                Education & Experience
            </div>

            <div className="bio-section">

                {/* Card */}
                <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
                    {/* Education Section */}
                    <div className="card-face education-section">
                        <img src= {gt} alt="School Logo" className="school-logo" />
                        <h2>Georgia Institute of Technology</h2>
                        <p>Bachelors in Computer Science, 2021 - 2025</p>
                    </div>
                    
                    {/* Experience Section */}
                    <div className="card-face experience-section">
                        <img src= {ar} alt="Job Logo" className="job-logo" />
                        <h2>Amazon</h2>
                        <p>Software Development Engineer, May 2023 - August 2023</p>
                        <p>Worked on Amazon Robotics technology and debugging tools to automate offline simulation of algorithms</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default EducationExperience;
