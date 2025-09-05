// src/pages/ReportDetails.js
import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Typography, Grid, CardContent, Box, Card, Button, Stack} from '@mui/material';
import OutlinedCard from '../components/Card';
import OutlinedCardTall from '../components/CardTall';
import CardProCon from '../components/CardProCon';
import ScoreCircle from '../components/ScoreCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import { getReportById, deleteReport, markReportAsViewed } from '../services/apiService';


export default function ReportDetails() {
  const { id } = useParams(); 
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSeen, setIsSeen] = useState(false);
  const navigate = useNavigate();

   useEffect(() => {
    const fetchReport = async () => {
      try {
        const { data } = await getReportById(id);
        setReport(data);
        setIsSeen(data.managerViewedTimestamp ? true : false);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchReport();
  }, [id]);


  if (loading) return <Typography>Loading report...</Typography>;
  if (!report) return <Typography>No report found.</Typography>;


  const handleMarkAsSeen = async () => {
    try {
      await markReportAsViewed(id);
      setIsSeen(!isSeen);
    } catch (err) {
      console.error("Failed to mark report as seen", err);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteReport(id);
      navigate('/');
    } catch (err) {
      console.error("Failed to delete report", err);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Header  pageTitle="Report Details">    </Header>
      <Grid container spacing={1} paddingTop={"8px"}>
        <Grid item size={3}>
            <OutlinedCard label="Customer" company={report.company?.name} description={`Manager: ${report.consultant?.manager?.name || ''}`}/>
        </Grid>
        <Grid item size={3}>
          <Card variant="outlined">
            <CardContent variant="outlined">
            <Stack direction="column" spacing={2}>
             <Button variant={isSeen ? "contained" : "outlined"} color={isSeen ? "primary" : "inherit"} endIcon={<CheckIcon />} onClick={handleMarkAsSeen} >
                Seen by Manager
              </Button>
              {/* <Button variant="outlined" startIcon={<EditIcon />}>
                Edit
              </Button> */}
              <Button variant="outlined" onClick={handleDelete} startIcon={<DeleteIcon />}>
                Delete
              </Button>
            </Stack>
            </CardContent>

          </Card>
        </Grid>
        <Grid item size={3}>
            <OutlinedCard label="Consultant" company={report.consultant?.name}  description={report.consultant?.email}></OutlinedCard>
        </Grid>
        <Grid item size={3}>
            <OutlinedCard
              label="Overall Score"
              company={report.overallScore?.toFixed(1)}
              description="Combined average of all scores"
            />
        </Grid>
      </Grid>
      {/* next row */}
      <Grid container spacing={1}>
        <Grid item size={4} paddingTop="8px">
            <OutlinedCardTall content={report.feedback}></OutlinedCardTall>
        </Grid>
        <Grid item size={8} paddingTop="8px">
            <CardProCon color="#c4fefa" label="Strenghts" content={report.pros}></CardProCon>
            <CardProCon color= "#ff9cb8" label="Areas of Improvement" content={report.cons}></CardProCon>
        </Grid>
      </Grid>
      {/* next row */}
      <Grid container spacing={1}>
        <Grid item size={3}>
            <ScoreCircle title="Joy" description="How engaged is the consultant with the customer?" subtitle={report.joyScore} score={report.joyScore} ></ScoreCircle>
        </Grid>
        <Grid item size={3}>
            <ScoreCircle title="Simplicity" description="How easy is it to work with the consultant?" score={report.simplicityScore}></ScoreCircle>
        </Grid>
        <Grid item size={3}>
            <ScoreCircle title="Results" description="Does the consultant deliver on expectations?" score={report.resultScore}></ScoreCircle>
        </Grid>
         <Grid item size={3}>
            <ScoreCircle title="Responsibility" description="Does the consultant take initiative?" score={report.responsibilityScore}></ScoreCircle>
        </Grid>

      </Grid>
      
    </Box>
  );
}