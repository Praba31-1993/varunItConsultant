import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cloudComputing from '../../../public/assets/cloudcomputing.jpg'
function OurServices() {

    const trendingTechnologies = [
        {
            name: "Cloud Computing",
            description: "Cloud computing provides on-demand access to servers, storage, and applications over the internet without local infrastructure."
        },
        {
            name: "Digital Marketing",
            description: "Digital marketing uses online platforms and digital channels to promote products, engage audiences, and drive sales."
        },
        {
            name: "SEO",
            description: "SEO is the process of optimizing websites to rank higher on search engines, improving visibility and organic traffic."
        },
        {
            name: "Artificial Intelligence (AI)",
            description: "AI involves creating systems that can learn, reason, and make decisions, enhancing automation and data-driven insights."
        }
    ];

    return (
        <div className=' px-2' >
            <h1 className='mb-2'>Our Services</h1>
            <div >
                <p className=''>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                </p>
            </div>
            <div className="row px-5">
                {trendingTechnologies?.map((list) => (
                    <div className="col-12 col-md-4 col-xl-4  mb-3">
                        <Card >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={list?.name === "Cloud Computing" ? "/assets/cloudcomputing.jpg" : list?.name === "Digital Marketing" ? "/assets/digitalmarketing.jpg" : list?.name === "SEO" ? "/assets/SEO.jpg" : list?.name === "Artificial Intelligence (AI)" ? "/assets/AI.jpg":''}
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
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>))}
            </div>

        </div>
    )
}

export default OurServices
