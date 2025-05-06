import { 
    Card, 
    CardContent, 
    Typography, 
    Stack, 
    Divider, 
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper
  } from '@mui/material';
  import { 
    TrendingUp as UpIcon, 
    TrendingDown as DownIcon, 
    TrendingFlat as FlatIcon 
  } from '@mui/icons-material';
  import MetricChart from './MetricChart';
  
  const PerformanceIcon = ({ trend }) => {
    const icons = {
      up: <UpIcon color="success" />,
      down: <DownIcon color="error" />,
      neutral: <FlatIcon color="warning" />
    };
    return icons[trend] || icons.neutral;
  };
  
  const PerformanceChip = ({ performance }) => {
    const config = {
      exceeding: { label: 'Exceeding', color: 'success' },
      meeting: { label: 'Meeting', color: 'warning' },
      below: { label: 'Below Target', color: 'error' }
    };
    const { label, color } = config[performance] || config.meeting;
    return <Chip label={label} color={color} size="small" />;
  };
  
  export default function DistributorCard({ distributor }) {
    const chartData = [
      { name: 'YTD Avg', value: distributor.ytdAverage },
      { name: 'Last Month', value: distributor.lastMonthShipped },
      { name: 'Forecast', value: distributor.forecastThisMonth }
    ];
  
    const percentageChange = ((distributor.lastMonthShipped - distributor.ytdAverage) / 
                            distributor.ytdAverage * 100).toFixed(1);
  
    return (
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">{distributor.name}</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <PerformanceChip performance={distributor.performance} />
              <PerformanceIcon trend={distributor.trend} />
            </Stack>
          </Stack>
          
          <Typography color="text.secondary" mb={2}>
            {distributor.region} • {distributor.categories.join(', ')}
          </Typography>
          
          <Divider sx={{ my: 1 }} />
          
          <TableContainer component={Paper} elevation={0} sx={{ mb: 2 }}>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell>Last Month</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                    {distributor.lastMonthShipped.toLocaleString()} units
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        ml: 1, 
                        color: percentageChange >= 0 ? 'success.main' : 'error.main' 
                      }}
                    >
                      {percentageChange >= 0 ? '▲' : '▼'} {Math.abs(percentageChange)}%
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Forecast This Month</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    {distributor.forecastThisMonth.toLocaleString()} units
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>YTD Average</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                    {distributor.ytdAverage.toLocaleString()} units/month
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          
          <MetricChart data={chartData} />
        </CardContent>
      </Card>
    );
  }