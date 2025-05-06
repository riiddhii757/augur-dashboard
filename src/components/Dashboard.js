import { Grid } from '@mui/material';
import { useData } from '../context/DataContext';
import DistributorCard from './DistributorCard';
import SummaryStats from './SummaryStats';

export default function Dashboard() {
  const { distributors } = useData();
  
  return (
    <div style={{ padding: '24px' }}>
      <SummaryStats />
      <Grid container spacing={3}>
        {distributors.map(distributor => (
          <Grid item key={distributor.id} xs={12} sm={6} lg={4}>
            <DistributorCard distributor={distributor} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}