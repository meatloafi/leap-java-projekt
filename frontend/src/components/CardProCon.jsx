import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardProCon({
  label = "Pro/Con",
  content = "Enter Pros/Cons here...",
  color = "white"
}) {
  return (
    <Box sx={{ minWidth: 275, color:color }} paddingBottom="8px">
      <Card variant="outlined" textAlign="left"sx={{ backgroundColor: color }}>
        <CardContent >
          <Typography gutterBottom variant="body1" sx={{ textAlign: 'left', color: 'text.secondary', fontSize: 16, fontFamily: 'Helvetica', paddingBottom: 2 }}>
            {label}
          </Typography>
          <Typography variant="h4" component="div" sx={{textAlign: 'left', fontFamily: 'AlmarenaNeue', paddingBottom: 11.4}}>
            {content}
          </Typography>

        </CardContent>
      </Card>
    </Box>
  );
}