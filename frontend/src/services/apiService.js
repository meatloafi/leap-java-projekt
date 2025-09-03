import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getAllReports = () => {
  return axios.get(`${API_URL}/reports`);
};

export const getAllConsultants = () => {
  return axios.get(`${API_URL}/consultants`);
}

export const createReport = (reportData) => {
  return axios.post(`${API_URL}/reports`, reportData);
};