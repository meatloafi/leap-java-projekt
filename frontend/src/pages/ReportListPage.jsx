// src/pages/ReportListPage.jsx
import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, Typography } from '@mui/material';
import { getAllReports } from '../services/apiService';

export default function ReportListPage() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchReports = async () => {
    try {
      const response = await getAllReports();
      console.log("Fetched reports:", response); // debug
      const reportsArray = Array.isArray(response.data) ? response.data : Array.isArray(response) ? response : [];
      setReports(reportsArray);
    } catch (err) {
      setError('Could not find reports. Make sure backend is running on http://localhost:8080.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  fetchReports();
}, []);


  const computeOverallScore = (report) => {
    const { joyScore, simplicityScore, resultScore, responsibilityScore } = report;
    if ([joyScore, simplicityScore, resultScore, responsibilityScore].every(s => typeof s === 'number')) {
      return ((joyScore + simplicityScore + resultScore + responsibilityScore) / 4).toFixed(1);
    }
    return '-';
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#F9FAFB', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">Reports</Typography>
        <Box>
          <Button
            component={RouterLink}
            to="/report/new"
            variant="contained"
            sx={{ mr: 1, backgroundColor: '#00DECE' }}
          >
            + Create Report
          </Button>
          <Button
            component={RouterLink}
            to="/consultant/viewAll"
            variant="contained"
            sx={{ mr: 1, backgroundColor: '#00DECE' }}
          >
            Consultants
          </Button>
          <Button
            component={RouterLink}
            to="/company/viewAll"
            variant="contained"
            sx={{ backgroundColor: '#00DECE' }}
          >
            Companies
          </Button>
        </Box>
      </Box>

      {loading ? (
        <Typography>Loading reports...</Typography>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#f0f0f0' }}>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Consultant</TableCell>
                <TableCell>Manager</TableCell>
                <TableCell>Seller</TableCell>
                <TableCell>Feedback</TableCell>
                <TableCell>Overall Score</TableCell>
                <TableCell>Created</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>{report.id}</TableCell>
                  <TableCell>{report.company?.name || '-'}</TableCell>
                  <TableCell>{report.consultant?.name || '-'}</TableCell>
                  <TableCell>{report.consultant?.manager?.name || '-'}</TableCell>
                  <TableCell>{report.consultant?.seller?.name || '-'}</TableCell>
                  <TableCell>{report.feedback || '-'}</TableCell>
                  <TableCell>{computeOverallScore(report)}</TableCell>
                  <TableCell>{report.createdDate ? new Date(report.createdDate).toLocaleDateString() : '-'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
