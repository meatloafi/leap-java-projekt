// src/pages/CreateReportPage.js
import React from 'react';
import { Typography, Grid, TextField, CardContent, Card } from '@mui/material';
import ReportCard from '../components/ReportCard';
import ScoreCircle from '../components/ScoreCircle';

export default function CreateReportPage() {
  return (
    <div>
        <Grid container spacing={2} sx={{ width: '100vw'}}>
            <Grid item md={4}>
                <Card sx={{ p: 2, mb: 2, width: '30vw'}}>
                    <CardContent>
                        <Typography variant="h6" component="div"  gutterBottom sx={{ textAlign: 'left', fontFamily: 'Helvetica, arial' }}>
                            Customer
                        </Typography>
                        <Typography variant="h4" color="text.secondary" gutterBottom sx={{ textAlign: 'left', fontFamily: 'Almarenaneue, sans-serif', fontWeight: 'bold' }}>
                            Company A
                        </Typography>
                        <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: 'left', fontFamily: 'Helvetica, arial' }}>
                            Vehicle Manufacturing
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4} >
                <Card sx={{ p: 2, mb: 2, width: '30vw'}}>
                    <CardContent>
                        <Typography variant="h6" component="div"  gutterBottom sx={{ textAlign: 'left', fontFamily: 'Helvetica, arial' }}>
                            Customer
                        </Typography>
                        <Typography variant="h4" color="text.secondary" gutterBottom sx={{ textAlign: 'left', fontFamily: 'Almarenaneue, sans-serif', fontWeight: 'bold' }}>
                            Company A
                        </Typography>
                        <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: 'left', fontFamily: 'Helvetica, arial' }}>
                            Vehicle Manufacturing
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4}>
                <Card sx={{ p: 2, width: '30vw'}}>
                    <CardContent>
                        <Typography variant="h6" component="div"  gutterBottom sx={{ textAlign: 'left', fontFamily: 'Helvetica, arial' }}>
                            Customer
                        </Typography>
                        <Typography variant="h4" color="text.secondary" gutterBottom sx={{ textAlign: 'left', fontFamily: 'Almarenaneue, sans-serif', fontWeight: 'bold' }}>
                            Company A
                        </Typography>
                        <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: 'left', fontFamily: 'Helvetica, arial' }}>
                            Vehicle Manufacturing
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>


        <Grid container spacing={2} sx={{ width: '100vw'}}>
            <Grid item md={4}>
                <Card sx={{ p: 2, mb: 2, width: '30vw', height: '41.3vh'}}>
                    <CardContent>
                        <Typography variant="body" component="div"  gutterBottom sx={{ textAlign: 'left', fontFamily: 'Helvetica, arial' }}>
                            Feedback
                        </Typography>
                        <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: 'left', fontFamily: 'Helvetica, arial' }}>
                            Vehicle Manufacturing
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={8} >
                <Card sx={{ p: 2, mb: 2, width: '63vw', height: '18.1vh'}}>
                    <CardContent>
                        <Typography variant="body1" component="div"  gutterBottom sx={{ textAlign: 'left', fontFamily: 'Helvetica, arial' }}>
                            Customer
                        </Typography>
                        <Typography variant="h6" color="text.secondary" gutterBottom sx={{ textAlign: 'left', fontFamily: 'Almarenaneue, sans-serif' }}>
                            Enter strengths...
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ p: 2, mb: 2, width: '63vw', height: '18.1vh'}}>
                    <CardContent>
                        <Typography variant="body1" component="div"  gutterBottom sx={{ textAlign: 'left', fontFamily: 'Helvetica, arial' }}>
                            Areas of Improvement
                        </Typography>
                        <Typography variant="h6" color="text.secondary" gutterBottom sx={{ textAlign: 'left', fontFamily: 'Almarenaneue, sans-serif' }}>
                            Enter areas of strenghts...
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            
        </Grid>

        <Grid container spacing={2} sx={{ width: '100vw'}}>
            <Grid item md={3}>
                <Card sx={{ p: 2, mb: 2, width: '22vw', height: '25vh'}}>
                    <CardContent>
                        <Typography variant="body" component="div"  gutterBottom sx={{ textAlign: 'left', fontFamily: 'Helvetica, arial' }}>
                            Feedback
                        </Typography>
                        <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: 'left', fontFamily: 'Helvetica, arial' }}>
                            Vehicle Manufacturing
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={3}>
                <Card sx={{ p: 2, mb: 2, width: '22vw', height: '25vh'}}>
                    <CardContent>
                        <Typography variant="body" component="div"  gutterBottom sx={{ textAlign: 'left', fontFamily: 'Helvetica, arial' }}>
                            Feedback
                        </Typography>
                        <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: 'left', fontFamily: 'Helvetica, arial' }}>
                            Vehicle Manufacturing
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={3}>
                <Card sx={{ p: 2, mb: 2, width: '22vw', height: '25vh'}}>
                    <CardContent>
                        <Typography variant="body" component="div"  gutterBottom sx={{ textAlign: 'left', fontFamily: 'Helvetica, arial' }}>
                            Feedback
                        </Typography>
                        <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: 'left', fontFamily: 'Helvetica, arial' }}>
                            Vehicle Manufacturing
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={3}>
                <Card sx={{ p: 2, mb: 2, width: '22vw', height: '25vh'}}>
                    <CardContent>
                        <Typography variant="body" component="div"  gutterBottom sx={{ textAlign: 'left', fontFamily: 'Helvetica, arial' }}>
                            Feedback
                        </Typography>
                        <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: 'left', fontFamily: 'Helvetica, arial' }}>
                            Vehicle Manufacturing
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            
        </Grid>
    </div>
  )
}