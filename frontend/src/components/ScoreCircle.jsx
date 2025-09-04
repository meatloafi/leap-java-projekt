import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

export default function ScoreCircle({
  label = "Customer",
  description = "Vehicle manufacturer",
  percentage = 66
}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent >
          <Typography gutterBottom variant="h3" sx={{ textAlign: 'left', color: 'text.secondary', fontSize: 25, fontFamily: 'AlmarenaNeue', paddingBottom: 1, fontWeight: 'bold' }}>
            {label}
          </Typography>
          <div style={{ width: 170, height: 170, alignItems: 'center', margin: '0 auto', paddingBottom: 10 }}>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',

                    // Text size
                    textSize: '20px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(237, 33, 144, ${percentage / 100})`,
                    textColor: 'gray',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#ED2190',
                })}
                />
          </div>
          
          <Typography variant="body2" sx={{ textAlign: 'left', color: 'text.secondary', fontSize: 18, fontFamily: 'Helvetica', paddingTop: 1, width:250, opacity:0.7}}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}