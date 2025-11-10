import React from 'react';
import aboutBanner from "/assets/aboutusbanner.jpg"

function AboutUs() {
  return (
    <section
      className="text-white position-relative"
      style={{
        overflow: 'hidden', 
      }}
    >
      {/* Banner Image */}
      <div className="position-relative">
        <img
          src="/assets/aboutusbanner.jpg"
          alt="About Us Banner"
          className="img-fluid w-100"
          style={{
            height: '100vh',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        {/* Overlay Text */}
        <div
          className="position-absolute top-50 start-50 translate-middle text-center px-3 px-md-5"
          style={{
            width: '100%',
            maxWidth: '900px',
          }}
        >
          <h1 className="fw-bold display-5 mb-3 mt-2 text-uppercase">
            About Us
          </h1>

          <p className="lead fs-6 fs-md-5 lh-base bg-dark bg-opacity-50 p-3 rounded-4">
            With over <strong>35 years of experience</strong> in the fabrication and engineering
            industry, we have built a strong reputation for delivering high-quality, reliable,
            and precision-engineered solutions. Our journey began with a passion for innovation
            and a commitment to excellence, and over the decades, we have successfully completed
            numerous industrial, commercial, and custom fabrication projects.
            <br /><br />
            Our expertise covers a wide range of services including metal fabrication,
            structural engineering, machinery design, installation, and maintenance.
            Backed by years of hands-on experience, technical knowledge, and a skilled team,
            we ensure that every project is executed with the highest standards of safety,
            efficiency, and durability.
            <br /><br />
            We take pride in our long-standing relationships with clients from various industries —
            built on trust, performance, and consistency. As we continue to grow, our focus remains
            on delivering <strong>engineering excellence</strong> and
            <strong> customized solutions</strong> that meet the evolving needs of our customers.
          </p>
        </div>
      </div>

      {/* Spacer for mobile to avoid overlap */}
      <div className="d-block d-md-none" style={{ height: '100px' }}></div>
    </section>
  );
}

export default AboutUs;
