import './App.css';
import { Routes, Route } from 'react-router-dom';
import ReportListPage from './pages/ReportListPage';
import ReportDetailPage from './pages/ReportDetailPage';
import CreateReportPage from './pages/CreateReportPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ReportListPage />} />

        <Route path="/report/new" element={<CreateReportPage />} />

        <Route path="/reports/:id" element={<ReportDetailPage />} />


      </Routes>
    </div>
  );
}

export default App;