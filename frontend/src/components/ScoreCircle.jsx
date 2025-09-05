import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

export default function ScoreCircle({
  label = "Customer",
  description = "Vehicle manufacturer",
  score = 0, 
}) {
  const value = Math.min(10, Math.max(0, Number(score)));
  const percentage = (value / 10) * 100;

  let circleColor = "rgba(83,254,242,0.5)"; // default high
  if (value < 4) {
    circleColor = "rgba(255,156,184,0.7)"; // low
  } else if (value < 7) {
    circleColor = "rgba(254,214,194,0.7)"; // mid
  }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            sx={{
              textAlign: 'left',
              color: 'text.secondary',
              fontSize: 25,
              fontFamily: 'AlmarenaNeue',
              paddingBottom: 1,
              fontWeight: 'bold',
            }}
          >
            {label}
          </Typography>

          <div
            style={{
              width: 170,
              height: 170,
              alignItems: 'center',
              margin: '0 auto',
              paddingBottom: 10,
            }}
          >
            <CircularProgressbar
              value={percentage}
              text={`${value.toFixed(1)}/10`}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: 'round',
                textSize: '20px',
                pathTransitionDuration: 0.5,
                pathColor: circleColor,
                textColor: 'gray',
                trailColor: '#d6d6d63d',
              })}
            />
          </div>

          <Typography
            variant="body2"
            sx={{
              textAlign: 'left',
              color: 'text.secondary',
              fontSize: 18,
              fontFamily: 'Helvetica',
              paddingTop: 1,
              width: 250,
              opacity: 0.7,
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
