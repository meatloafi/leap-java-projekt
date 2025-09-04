// src/pages/CreateReportPage.js
import Reactfrom, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Header from '../components/Header';
import { Typography, Grid, TextField, CardContent, Card, Paper, Box } from '@mui/material';
import OutlinedCard from '../components/Card';
import NewCompany from '../components/NewCompany';
import TableCard from '../components/TableCard';
import DeleteIcon from '@mui/icons-material/Delete';

import axios from 'axios';



export default function CompanyPage() {
  const API_URL = 'http://localhost:8080/api';

  const [companies, setCompanies] = useState([]);
  const [newCompanyName, setNewCompanyName] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(null);


  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    try {
      const response = await axios.get(`${API_URL}/companies`);
      setCompanies(response.data);
    } catch (error) {
      console.error('Error loading companies:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/companies`, { name: newCompanyName });
      setNewCompanyName('');
      loadCompanies();
    } catch (error) {
      console.error('Error creating company:', error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1}}>
    <Header pageTitle="Companies">    </Header>
      <Grid container spacing={1} paddingTop={"8px"}>
        <Grid item size="grow">
            <OutlinedCard label="Company Name" company={selectedCompany ? selectedCompany.name : "No Company Chosen"} description={selectedCompany ? selectedCompany.id : null}></OutlinedCard>
        </Grid>
        <Grid item size="grow">
            <OutlinedCard label="Consultants" company="100"  description="Assigned from HiQ"></OutlinedCard>
        </Grid>
        <Grid item size="grow">
            <OutlinedCard label="Overall Score" company="8.1"  description="-8% compared to last report"></OutlinedCard>
        </Grid>
      </Grid>
      {/* next row */}
      <Grid container spacing={1}>
        <Grid item size={6} paddingTop="8px">
            <NewCompany label="Add a Company" labelText="Company Name" onSubmit={async (name) => { await axios.post(`${API_URL}/companies`, { name }); loadCompanies(); }}></NewCompany>
        </Grid>
        <Grid item size={6} paddingTop="8px">
            <TableCard title="Company" data={companies}  selectedCompany={selectedCompany} onRowClick={(company) => setSelectedCompany(company)} buttonIcon={DeleteIcon}
              onButtonClick={async (company) => {
                await axios.delete(`${API_URL}/companies/${company.id}`);
                loadCompanies();
              }}/>
        </Grid>
      </Grid>
      
    </Box>
  );
}