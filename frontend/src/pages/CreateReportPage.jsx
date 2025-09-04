// src/pages/CreateReportPage.js
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import { Grid, Box, Button } from '@mui/material';

import ChoiceCard from '../components/ChoiceCard';

import CardProConForm from '../components/CardProConForm';

import OutlinedCard from '../components/Card';

import CardTallForm from '../components/CardTallForm';
import SliderCard from '../components/SliderCard';

export default function CreateReportPage() {
  const [companies, setCompanies] = useState([]);
  const [consultants, setConsultants] = useState([]);
  const [report, setReport] = useState({
    customer: "",
    consultant: "",
    feedback: "",
    pros: "",
    cons: "",
    joyScore: 5,
    simplicityScore: 5,
    resultScore: 5,
    responsibilityScore: 5
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/companies")
      .then(res => res.json())
      .then(data => setCompanies(data))
      .catch(err => console.error("Error fetching companies:", err));
  }, []);

  useEffect(() => {
    if (report.company) {
      fetch("http://localhost:8080/api/consultants")
        .then(res => res.json())
        .then(data => {
          const filtered = data.filter(c => Number(c.company.id) === Number(report.company));
          setConsultants(filtered);
        })
        .catch(err => console.error("Error fetching consultants:", err));
    } else {
      setConsultants([]);
    }
  }, [report.company]);

  const handleChange = (field, value) => {
    setReport(prev => ({ ...prev, [field]: value }));
  };

 const handleSubmit = async () => {
  if (!report.company || !report.consultant) {
    alert("Please select a company and consultant before submitting.");
    return;
  }

  const payload = {
    company: { id: report.company },
    consultant: { id: report.consultant },
    feedback: report.feedback,
    pros: report.pros,
    cons: report.cons,
    project: report.project || "", 
    joyScore: report.joyScore,
    simplicityScore: report.simplicityScore,
    resultScore: report.resultScore,
    responsibilityScore: report.responsibilityScore
  };

  try {
    const res = await fetch("http://localhost:8080/api/reports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      throw new Error("Failed to create report");
    }

    alert("Report submitted successfully!");
    setReport({
      customer: "",
      consultant: "",
      feedback: "",
      pros: "",
      cons: "",
      joyScore: 5,
      simplicityScore: 5,
      resultScore: 5,
      responsibilityScore: 5
    });

  } catch (err) {
    console.error(err);
    alert("Error submitting report. Check console.");
  }
};

  return (
    <Box sx={{ flexGrow: 1}}>
    <Header pageTitle="Create Report">    </Header>
      <Grid container spacing={1} paddingTop={"8px"}>
        <Grid item size="grow">
           <ChoiceCard label="Customer" value={report.company} options={companies}  valueKey="id" displayKey="name" onChange={(v) => handleChange("company", v)} />
        </Grid>
        <Grid item size="grow">
            <ChoiceCard label="Consultant" value={report.consultant} options={consultants}  valueKey="id" displayKey="name" onChange={(v) => handleChange("consultant", v)} />
        </Grid>
        <Grid item size="grow">
            <OutlinedCard label="Overall Score" company={( (report.joyScore + report.simplicityScore + report.resultScore + report.responsibilityScore) / 4 ).toFixed(1)} description="- compared to last report" />
        </Grid>
      </Grid>
      {/* next row */}
      <Grid container spacing={1}>
        <Grid item size={4} paddingTop="8px">
            <CardTallForm label="Feedback" value={report.feedback} onChange={(v) => handleChange("feedback", v)} />
        </Grid>
        <Grid item size={8} paddingTop="8px">
            <CardProConForm color="#00DECF" label="Pros" value={report.pros} onChange={(v) => handleChange("pros", v)} />
            <CardProConForm color="#FACAD9" label="Cons" value={report.cons} onChange={(v) => handleChange("cons", v)} />
        </Grid>
      </Grid>
      {/* next row */}
      <Grid container spacing={1}>
        <Grid item size={3}>
            <SliderCard label="Joy" description="How engaged is the consultant with the customer?" initialValue={report.joyScore} onChange={(v) => handleChange("joyScore", v)} />
        </Grid>
        <Grid item size={3}>
            <SliderCard label="Simplicity" description="How easy is it to work with the consultant?" initialValue={report.simplicityScore} onChange={(v) => handleChange("simplicityScore", v)} />
        </Grid>
        <Grid item size={3}>
            <SliderCard label="Results" description="Does the consultant deliver on expectations?" initialValue={report.resultScore} onChange={(v) => handleChange("resultScore", v)} />
        </Grid>
         <Grid item size={3}>
            <SliderCard label="Responsibility" description="Does the consultant take initiative?" initialValue={report.responsibilityScore} onChange={(v) => handleChange("responsibilityScore", v)} />
            <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit} > Submit Report </Button>
        </Grid>

      </Grid>
      
    </Box>
  );
}