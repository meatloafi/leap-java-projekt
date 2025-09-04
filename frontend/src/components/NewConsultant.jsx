import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

export default function NewConsultant({
  label = "Add New Consultant",
  buttonLabel = "Add",
  companies = [],
  managers = [],
  sellers = [],
  onSubmit,
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [company, setCompany] = useState('');
  const [manager, setManager] = useState('');
  const [seller, setSeller] = useState('');

  const handleButtonClick = () => {
    if (onSubmit) {
      onSubmit({
        name,
        email,
        projectTag: project,
        company,
        manager,
        seller,
      });
      setName('');
      setEmail('');
      setProject('');
      setCompany('');
      setManager('');
      setSeller('');
    }
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h6" sx={{ textAlign: 'left' }}>
            {label}
          </Typography>

          <TextField
            required
            fullWidth
            variant="standard"
            label="Consultant Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            required
            fullWidth
            variant="standard"
            label="Consultant Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            required
            fullWidth
            variant="standard"
            label="Project"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            sx={{ mb: 2 }}
          />

          <FormControl fullWidth variant="standard" sx={{ mb: 2 }}>
            <InputLabel>Company</InputLabel>
            <Select value={company} onChange={(e) => setCompany(e.target.value)}>
              {companies.map((c) => (
                <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth variant="standard" sx={{ mb: 2 }}>
            <InputLabel>Manager</InputLabel>
            <Select value={manager} onChange={(e) => setManager(e.target.value)}>
              {managers.map((m) => (
                <MenuItem key={m.id} value={m.id}>{m.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth variant="standard" sx={{ mb: 2 }}>
            <InputLabel>Seller</InputLabel>
            <Select value={seller} onChange={(e) => setSeller(e.target.value)}>
              {sellers.map((s) => (
                <MenuItem key={s.id} value={s.id}>{s.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button variant="contained" fullWidth onClick={handleButtonClick}>
            {buttonLabel}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
