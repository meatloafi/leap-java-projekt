import React, { useState, useEffect } from 'react'; 
import { Link as RouterLink } from 'react-router-dom';
import ReportsList from '../components/ReportList';
import Button from '@mui/material/Button';
import { getAllReports } from '../services/apiService'; 

function ReportListPage() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await getAllReports();
        setReports(response.data);
      } catch (err) {
        setError('Could not find reports, make sure you are running http://localhost:8080.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <p>Laddar rapporter...</p>;
    }
    if (error) {
      return <p style={{ color: 'red' }}>{error}</p>;
    }
    return <ReportsList reports={reports} />;
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#F9FAFB', minHeight: '100vh' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Reports</h1>
        <Button
          component={RouterLink}
          to="/report/new"
          variant="contained"
          color="primary"
          style={{backgroundColor: '#00DECE' }}
        >
          + Create Report
        </Button>
        <Button
          component={RouterLink}
          to="/consultant/viewAll"
          variant="contained"
          color="primary"
          style={{backgroundColor: '#00DECE' }}
        >
          Consultants
        </Button>
        <Button
          component={RouterLink}
          to="/company/viewAll"
          variant="contained"
          color="primary"
          style={{backgroundColor: '#00DECE' }}
        >
          Companies
        </Button>
      </header>

      {renderContent()}
    </div>
  );
}

export default ReportListPage;