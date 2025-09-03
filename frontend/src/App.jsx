import './App.css';
import { Routes, Route } from 'react-router-dom';
import ReportListPage from './pages/ReportListPage';
import ReportDetailPage from './pages/ReportDetailPage';
import CreateReportPage from './pages/CreateReportPage';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Huvudsidan (/) visar rapportlistan */}
        <Route path="/" element={<ReportListPage />} />

        {/* Sidan för att skapa en ny rapport */}
        <Route path="/report/new" element={<CreateReportPage />} />

        {/* Sidan för att visa en specifik rapport. :id är en dynamisk parameter */}
        <Route path="/reports/:id" element={<ReportDetailPage />} />

        {/* Här kan du lägga till routes för säljare och konsultchefer senare, t.ex: */}
        {/* <Route path="/seller/:id" element={<SellerDashboard />} /> */}
        {/* <Route path="/manager/:id" element={<ManagerDashboard />} /> */}
      </Routes>
    </div>
  );
}

export default App;