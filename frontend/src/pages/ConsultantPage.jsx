import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import Header from '../components/Header';
import OutlinedCard from '../components/Card';
import TableCardConsultant from '../components/TableCardConsultant';
import NewConsultant from '../components/NewConsultant';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

import CardTallChart from '../components/CardTallChart';

import { 
  getAllCompanies, 
  getAllManagers, 
  getAllSellers, 
  getAllConsultants, 
  createConsultant,
  deleteConsultant,
  getReportsByConsultantId
} from '../services/apiService';


export default function ConsultantPage() {
  const [companies, setCompanies] = useState([]);
  const [managers, setManagers] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [consultants, setConsultants] = useState([]);
  const [selectedConsultant, setSelectedConsultant] = useState(null);
  const [consultantReports, setConsultantReports] = useState([]);

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      const [companiesData, managersData, sellersData, consultantsData] = await Promise.all([
        getAllCompanies(),
        getAllManagers(),
        getAllSellers(),
        getAllConsultants()
      ]);
      setCompanies(companiesData.data);
      setManagers(managersData.data);
      setSellers(sellersData.data);
      setConsultants(consultantsData.data);
    } catch (error) {
      console.error("Failed to load initial data", error);
    }
  };

  const loadConsultants = async () => {
    try {
      const response = await getAllConsultants();
      setConsultants(response.data);
    } catch (error) {
      console.error('Error loading consultants:', error);
    }
  };
  
  const loadConsultantReports = async (consultantId) => {
    if (!consultantId) {
      setConsultantReports([]);
      return;
    }
    try {
        const response = await getReportsByConsultantId(consultantId);
        setConsultantReports(response.data);
    } catch (error) {
        console.error('Error loading consultant reports:', error);
        setConsultantReports([]);
    }
  };

  const handleConsultantSelect = (consultant) => {
    setSelectedConsultant(consultant);
    loadConsultantReports(consultant.id); 
  };

  const handleCreateConsultant = async (consultant) => {
    const consultantPayload = {
      ...consultant,
      company: { id: consultant.company },
      manager: { id: consultant.manager },
      seller: { id: consultant.seller },
    };
    try {
      await createConsultant(consultantPayload);
      loadConsultants();
    } catch (error) {
      console.error("Failed to create consultant:", error);
    }
  };

  const handleDeleteConsultant = async (consultant) => {
    try {
      await deleteConsultant(consultant.id);
      loadConsultants();
      if (selectedConsultant && selectedConsultant.id === consultant.id) {
        setSelectedConsultant(null);
        setConsultantReports([]);
      }
    } catch (error) {
      console.error("Failed to delete consultant:", error);
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
            description={selectedConsultant ? selectedConsultant.email : null}
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
            company={consultantReports.length > 0 ? consultantReports[consultantReports.length - 1].overallScore.toFixed(1) : "N/A"}
            description="Average of all scores"
          />
        </Grid>
      </Grid>

      {/* next row */}
      <Grid container spacing={1} paddingTop="8px">
        <Grid item size={6}>

          <CardTallChart reports={consultantReports} />
        </Grid>

        <Grid item size={6}>
          <NewConsultant
            label="Add New Consultant"
            companies={companies}
            managers={managers}
            sellers={sellers}
            onSubmit={handleCreateConsultant}
            
          />
          <TableCardConsultant
            title="Consultants"
            data={consultants}
            selectedCompany={selectedConsultant}
            onRowClick={handleConsultantSelect}
            buttonIcon={DeleteIcon}
            onButtonClick={handleDeleteConsultant}

          />
          
        </Grid>
      </Grid>
    </Box>
  );
}
