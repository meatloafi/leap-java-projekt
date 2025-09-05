import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import Header from '../components/Header';
import OutlinedCard from '../components/Card';
import TableCardConsultant from '../components/TableCardConsultant';
import NewConsultant from '../components/NewConsultant';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

import CardTallChart from '../components/CardTallChart';

export default function ConsultantPage() {
  const API_URL = 'http://localhost:8080/api';

  const [companies, setCompanies] = useState([]);
  const [managers, setManagers] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [consultants, setConsultants] = useState([]);
  const [selectedConsultant, setSelectedConsultant] = useState(null);

  useEffect(() => {
    loadCompanies();
    loadManagers();
    loadSellers();
    loadConsultants();
  }, []);

  const loadCompanies = async () => {
    try {
      const response = await axios.get(`${API_URL}/companies`);
      setCompanies(response.data);
    } catch (error) {
      console.error('Error loading companies:', error);
    }
  };

  const loadManagers = async () => {
    try {
      const response = await axios.get(`${API_URL}/managers`);
      setManagers(response.data);
    } catch (error) {
      console.error('Error loading managers:', error);
    }
  };

  const loadSellers = async () => {
    try {
      const response = await axios.get(`${API_URL}/sellers`);
      setSellers(response.data);
    } catch (error) {
      console.error('Error loading sellers:', error);
    }
  };

  const loadConsultants = async () => {
    try {
      const response = await axios.get(`${API_URL}/consultants`);
      setConsultants(response.data);
    } catch (error) {
      console.error('Error loading consultants:', error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header pageTitle="Consultants" />
      
      <Grid container spacing={1} paddingTop="8px">
        <Grid item size="grow">
          <OutlinedCard
            label="Consultant Name"
            company={selectedConsultant ? selectedConsultant.name : "No Consultant Chosen"}
          />
        </Grid>
        <Grid item size="grow">
          <OutlinedCard
            label="Company"
            company={selectedConsultant ? selectedConsultant.company?.name : "N/A"}
            description={selectedConsultant ? selectedConsultant.projectTag : ""}
          />
        </Grid>
        <Grid item size="grow">
          <OutlinedCard
            label="Overall Score"
            company={selectedConsultant ? selectedConsultant.score || "8.1" : "8.1"}
            description="-8% compared to last report"
          />
        </Grid>
      </Grid>

      {/* next row */}
      <Grid container spacing={1} paddingTop="8px">
        <Grid item size={6}>

          <CardTallChart></CardTallChart>
        </Grid>

        <Grid item size={6}>
          <NewConsultant
            label="Add New Consultant"
            companies={companies}
            managers={managers}
            sellers={sellers}
            onSubmit={async (consultant) => {
              await axios.post(`${API_URL}/consultants`, {
                ...consultant,
                company: { id: consultant.company },
                manager: { id: consultant.manager },
                seller: { id: consultant.seller },
              });
              loadConsultants();
            }}
          />
          <TableCardConsultant
            title="Consultants"
            data={consultants}
            selectedCompany={selectedConsultant}
            onRowClick={(consultant) => setSelectedConsultant(consultant)}
            buttonIcon={DeleteIcon}
            onButtonClick={async (consultant) => {
              await axios.delete(`${API_URL}/consultants/${consultant.id}`);
              loadConsultants();
            }}
          />
          
        </Grid>
      </Grid>
    </Box>
  );
}
