import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Rapporter
export const getAllReports = () => fetch("http://localhost:8080/api/reports").then(res => res.json());
export const getReportById = (id) => apiClient.get(`/reports/${id}`);
export const createReport = (reportData) => apiClient.post('/reports', reportData);
export const updateReport = (id, reportData) => apiClient.put(`/reports/${id}`, reportData);
export const deleteReport = (id) => apiClient.delete(`/reports/${id}`);
export const markReportAsViewed = (id) => apiClient.put(`/reports/${id}/viewed`);


// Konsulter
export const getAllConsultants = () => apiClient.get('/consultants');
export const getConsultantById = (id) => apiClient.get(`/consultants/${id}`);
export const createConsultant = (consultantData) => apiClient.post('/consultants', consultantData);
export const updateConsultant = (id, consultantData) => apiClient.put(`/consultants/${id}`, consultantData);
export const deleteConsultant = (id) => apiClient.delete(`/consultants/${id}`);


// Företag
export const getAllCompanies = () => apiClient.get('/companies');
export const getCompanyById = (id) => apiClient.get(`/companies/${id}`);
export const createCompany = (companyData) => apiClient.post('/companies', companyData);
export const updateCompany = (id, companyData) => apiClient.put(`/companies/${id}`, companyData);
export const deleteCompany = (id) => apiClient.delete(`/companies/${id}`);


// Chefer
export const getAllManagers = () => apiClient.get('/managers');
export const getManagerById = (id) => apiClient.get(`/managers/${id}`);
export const createManager = (managerData) => apiClient.post('/managers', managerData);
export const updateManager = (id, managerData) => apiClient.put(`/managers/${id}`, managerData);
export const deleteManager = (id) => apiClient.delete(`/managers/${id}`);


// Säljare
export const getAllSellers = () => apiClient.get('/sellers');
export const getSellerById = (id) => apiClient.get(`/sellers/${id}`);
export const createSeller = (sellerData) => apiClient.post('/sellers', sellerData);
export const updateSeller = (id, sellerData) => apiClient.put(`/sellers/${id}`, sellerData);
export const deleteSeller = (id) => apiClient.delete(`/sellers/${id}`);

