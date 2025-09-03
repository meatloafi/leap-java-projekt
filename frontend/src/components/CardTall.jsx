import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function OutlinedCardTall({
  label = "Feedback",
  content = "Enter feedback here...",
}) {
  return (
    <Box sx={{ minWidth: 275}}>
      <Card variant="outlined" textAlign="left">
        <CardContent >
          <Typography gutterBottom variant="body1" sx={{ textAlign: 'left', color: 'text.secondary', fontSize: 16, fontFamily: 'Helvetica', paddingBottom: 2 }}>
            {label}
          </Typography>
          <Typography variant="h4" component="div" sx={{textAlign: 'left', fontFamily: 'AlmarenaNeue', paddingBottom: 40}}>
            {content}
          </Typography>

        </CardContent>
      </Card>
    </Box>
  );
}