import React from 'react';
import aboutBanner from "/assets/aboutusbanner.jpg";

function AboutUs() {
    return (
        <div className="position-relative text-white">
            {/* Banner Image */}
            <img
                src={"/assets/aboutusbanner.jpg"}
                alt="About Us Banner"
                className="img-fluid w-100"
                style={{ height: '700px', objectFit: 'cover' }}
            />


            {/* Overlay Text */}
            <div
                className="position-absolute top-50 start-50 translate-middle text-center p-4 "

            >
                <h1 className="mb-3 mt-2 fw-bold display-5 ">About Us</h1>

                <p className="lead">
                    With over <strong>35 years of experience</strong> in the fabrication and engineering industry,
                    we have built a strong reputation for delivering high-quality, reliable, and precision-engineered solutions.
                    Our journey began with a passion for innovation and a commitment to excellence, and over the decades,
                    we have successfully completed numerous industrial, commercial, and custom fabrication projects.
                    <br /><br />
                    Our expertise covers a wide range of services including metal fabrication, structural engineering,
                    machinery design, installation, and maintenance. Backed by years of hands-on experience, technical
                    knowledge, and a skilled team, we ensure that every project is executed with the highest standards of
                    safety, efficiency, and durability.
                    <br /><br />
                    We take pride in our long-standing relationships with clients from various industries — built on trust,
                    performance, and consistency. As we continue to grow, our focus remains on delivering
                    <strong> engineering excellence </strong> and <strong> customized solutions </strong> that meet the evolving needs of our customers.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
