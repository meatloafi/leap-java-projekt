import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

function ReportDetailPage() {
  const { id } = useParams(); // Hämta ID från URL:en

  return (
    <div>
        <Header>    </Header>
        
      <h1>Report #{id}</h1>
      <p>Här kommer detaljerna för rapporten att visas...</p>
    </div>
  );
}

export default ReportDetailPage;