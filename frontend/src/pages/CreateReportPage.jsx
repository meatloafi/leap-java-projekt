// src/pages/CreateReportPage.js
import React from 'react';
import { styled } from '@mui/material/styles';
import Header from '../components/Header';
import { Typography, Grid, TextField, CardContent, Card, Paper, Box } from '@mui/material';

import ChoiceCard from '../components/ChoiceCard';

import CardProConForm from '../components/CardProConForm';

import OutlinedCard from '../components/Card';
import OutlinedCardTall from '../components/CardTall';
import CardProCon from '../components/CardProCon';

import ScoreCircle from '../components/ScoreCircle';
import CardTallForm from '../components/CardTallForm';

export default function CreateReportPage() {
  return (
    <Box sx={{ flexGrow: 1}}>
    <Header pageTitle="Create Report">    </Header>
      <Grid container spacing={1} paddingTop={"8px"}>
        <Grid item size="grow">
            <ChoiceCard label="Customer"  description="Vehicle Manufacturing"></ChoiceCard>
        </Grid>
        <Grid item size="grow">
            <ChoiceCard label="Consultant" description="Vehicle Manufacturing"></ChoiceCard>
        </Grid>
        <Grid item size="grow">
            <OutlinedCard label="Overall Score" company="8.1"  description="-8% compared to last report"></OutlinedCard>
        </Grid>
      </Grid>
      {/* next row */}
      <Grid container spacing={1}>
        <Grid item size={4} paddingTop="8px">
            <CardTallForm label="Feedback" onSubmit={(feedback) => console.log("Feedback submitted:", feedback)} />
        </Grid>
        <Grid item size={8} paddingTop="8px">
            <CardProConForm color="#00DECF" label="Customer" content="Enter strengths..."></CardProConForm>
            <CardProConForm color= "#FACAD9" label="Customer" content="Enter areas of improvement..."></CardProConForm>
        </Grid>
      </Grid>
      {/* next row */}
      <Grid container spacing={1}>
        <Grid item size={3}>
            <ScoreCircle label="Simplicity" description="How easy is the consultant to work with?" subtitle="8.5" score="8.5"></ScoreCircle>
        </Grid>
        <Grid item size={3}>
            <ScoreCircle label="Joy" description="Does the consultant bring positivity into the workplace?" subtitle="8.5" score="8.5"></ScoreCircle>
        </Grid>
        <Grid item size={3}>
            <ScoreCircle label="Results" description="Does the consultant meed customer expectations?" subtitle="8.5" score="8.5"></ScoreCircle>
        </Grid>
         <Grid item size={3}>
            <ScoreCircle label="Responsability" description="Does the consultant take initiative on their own?" subtitle="8.5" score="8.5"></ScoreCircle>
        </Grid>

      </Grid>
      
    </Box>
  );
}