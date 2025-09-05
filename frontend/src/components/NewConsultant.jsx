import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, Box, IconButton, Collapse } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


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
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
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
      setIsExpanded(false);
    }
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box sx={{ minWidth: 275, mb: 1}}>
      <Card variant="outlined">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, cursor: 'pointer' }} onClick={handleToggleExpand}>
            <Typography variant="h6">
                {label}
            </Typography>
            <IconButton onClick={(e) => { e.stopPropagation(); handleToggleExpand(); }}>
                {isExpanded ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
            </IconButton>
        </Box>
        <Collapse in={isExpanded}>
            <CardContent>
              <form onSubmit={handleSubmit}>
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

                <Button variant="contained" fullWidth type="submit">
                  {buttonLabel}
                </Button>
              </form>
            </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}

