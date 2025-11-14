import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cloudComputing from '../../../public/assets/cloudcomputing.jpg'
import 'animate.css';

function OurServices() {

    const trendingTechnologies = [
        {
            name: "Digital Marketing Strategy",
            description: "We don't just market; we architect. We design a complete blueprint for your digital growth, from data-driven SEO and social media to content that builds authority."
        },
        {
            name: "Personal Branding",
            description: " For founders, executives, and experts. We engineer your personal brand with the same care we'd use for a high-stakes industrial project. We build your legacy."
        },
        {
            name: "Our Engineering & Fabrication Legacy",
            description: " We are proudly backed by Sri PachaiAmman Engineering. Our foundation is 35+ years of delivering world-class fabrication and engineering solutions. This precision is our promise."
        },

    ];

    return (
        <div className=' px-2' >
            <h4 className='my-2'>Our Services</h4>

            <div className="row px-5 ">
                {trendingTechnologies?.map((list) => (
                    <div className="col-12 col-md-4 col-xl-4  mb-3 animate__animated animate__zoomIn serviceCard">
                        <Card >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="250"
                                image={list?.name === "Personal Branding" ? "/assets/branding.jpg" : list?.name === "Digital Marketing Strategy" ? "/assets/digitalmarketing.jpg" : list?.name === "Our Engineering & Fabrication Legacy" ? "/assets/gear.jpg" : ''}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {list?.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {list?.description}
                                </Typography>
                            </CardContent>

                        </Card>
                    </div>))}
            </div>

        </div>
    )
}

export default OurServices
