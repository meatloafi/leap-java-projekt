import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function OutlinedCard({
  label = "Customer",
  company = "Company A",
  description = ""
}) {
  return (
    <Box sx={{ minWidth: 275, minHeight: 100 }}>
      <Card variant="outlined" textAlign="left">
        <CardContent >
          <Typography gutterBottom variant="body1" sx={{ textAlign: 'left', color: 'text.secondary', fontSize: 16, fontFamily: 'Helvetica', paddingBottom: 2 }}>
            {label}
          </Typography>
          <Typography variant="h4" component="div" sx={{textAlign: 'left', fontFamily: 'AlmarenaNeue'}}>
            {company}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'left', color: 'text.secondary', fontSize: 18, fontFamily: 'Helvetica', paddingTop: 2, minHeight: 40 }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}