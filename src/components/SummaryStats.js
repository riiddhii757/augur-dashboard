import { 
    Paper, 
    Stack, 
    Typography,
    Grid,
    Divider
  } from '@mui/material';
  import { useData } from '../context/DataContext';
  
  const StatItem = ({ label, value, unit, trend }) => {
    const trendIcon = trend === 'up' ? '▲' : trend === 'down' ? '▼' : '→';
    const trendColor = trend === 'up' ? 'success.main' : 
                     trend === 'down' ? 'error.main' : 'text.secondary';
  
    return (
      <Paper elevation={0} sx={{ p: 2, flex: 1 }}>
        <Typography variant="subtitle2" color="text.secondary">{label}</Typography>
        <Stack direction="row" alignItems="baseline" spacing={1}>
          <Typography variant="h4" fontWeight="bold">
            {value.toLocaleString()}
          </Typography>
          <Typography variant="body1" color="text.secondary">{unit}</Typography>
        </Stack>
        {trend && (
          <Typography variant="caption" sx={{ color: trendColor }}>
            {trendIcon} vs previous period
          </Typography>
        )}
      </Paper>
    );
  };
  
  export default function SummaryStats() {
    const { summary } = useData();
    const trend = summary.lastMonth > (summary.ytdAverage * (summary.count || 1)) ? 'up' : 'down';
  
    return (
      <Paper elevation={2} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          System Overview
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <StatItem 
              label="Total Last Month" 
              value={summary.lastMonth} 
              unit="units"
              trend={trend}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <StatItem 
              label="Total Forecast" 
              value={summary.forecast} 
              unit="units"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <StatItem 
              label="Avg YTD" 
              value={summary.ytdAverage} 
              unit="units/month"
            />
          </Grid>
        </Grid>
      </Paper>
    );
  }