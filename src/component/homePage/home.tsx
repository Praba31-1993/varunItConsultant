import React from 'react';
import aboutBanner from "/assets/aboutusbanner.jpg"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'animate.css';
import { Link } from "react-router-dom";
function Home() {

  const trendingTechnologies = [
    {
      name: "Sri PachaiAmman Engineering",
      description: "Sri Pachaiyamman Engineering Works provides you the best range of ss gate, cattle shed, bipap machine, casual shoes, rolling shutters making machine & floor mat with effective & timely delivery.",
      webUrl: 'https://maps.app.goo.gl/H6hzfDKfggsFM4PE6?g_st=aw'
    },
    {
      name: "L&t pvt ltd",
      description: "A trusted engineering and infrastructure leader where we deliver end-to-end digital marketing solutions—enhancing brand visibility, generating high-quality leads, and strengthening online presence across competitive markets.",
      webUrl: "https://www.larsentoubro.com/"
    },
    {
      name: "L.G. Balakrishnan and bro . (LGB ) Pvt Ltd",
      description: "We provide advanced SEO strategies tailored to elevate search engine rankings, improve organic reach, and increase customer engagement for one of India’s most respected industrial and automotive component manufacturers.",
      webUrl: 'https://www.lgb.co.in/'
    },
    {
      name: "RENOLD chain india pvt limited, D.Gudalur",
      description: "We empower Renold’s manufacturing excellence with AI-driven digital solutions that optimize decision-making, enhance automation, and deliver actionable insights for improved operational efficiency and brand growth.",
      webUrl: "https://www.renold.com/"
    },
    {
      name: "DVN Pvt Ltd",
      description: "Through AI-powered innovations, we help DVN Pvt Ltd streamline processes, strengthen digital transformation, and unlock data-driven strategies that boost productivity, accuracy, and long-term scalability.",
      webUrl: 'https://www.dvnenergy.com'
    }
  ];
  return (
    <>
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
              ENGINEERING YOUR BRAND'S SUCCESS
            </h1>

            <p className="lead fs-6 fs-md-5 lh-base bg-dark bg-opacity-50 p-3 rounded-4">
              Digital Marketing & Personal Branding, Built on   |
              |      a 35-Year Legacy of Precision.
            </p>

            <div className="d-flex justify-content-center gap-4" >
              <button type="button" className="btn btn-primary">Book Your Strategy Call</button>
              <button type="button" className="btn btn-outline-primary">Our Engineering Legacy</button>
            </div>
          </div>

          {/* Truster By clients */}

        </div>

        {/* Spacer for mobile to avoid overlap */}

      </section>

      <section className='my-4'>
        <h2>As Trusted Partners</h2>

        <div className="row px-5 ">
          {trendingTechnologies?.map((list) => (
            <div className="col-12 col-md-4 col-xl-4  mb-3 animate__animated animate__zoomIn serviceCard">
              <Card >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="250"
                  image={list?.name === "Sri PachaiAmman Engineering" ? "/assets/engineeringWorks.jpg" : list?.name === "L&t pvt ltd" ? "/assets/ltconstruction.jpg" : list?.name === "L.G. Balakrishnan and bro . (LGB ) Pvt Ltd" ? "/assets/lgb.jpg" : list?.name === "RENOLD chain india pvt limited, D.Gudalur" ? "/assets/renault.jpg" : list?.name === "DVN Pvt Ltd" ? "/assets/dvn.jpg" : ''}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {list?.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {list?.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => window.open(list?.webUrl, "_blank")}>
                    Show More
                  </Button>
                </CardActions>
              </Card>
            </div>))}
        </div>
      </section>

    </>
  );
}

export default Home;
