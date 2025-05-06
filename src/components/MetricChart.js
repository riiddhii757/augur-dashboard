import { 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    Tooltip, 
    ResponsiveContainer,
    CartesianGrid,
    Legend
  } from 'recharts';
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{
          backgroundColor: '#fff',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}>
          <p style={{ fontWeight: 'bold' }}>{label}</p>
          <p>{`${payload[0].value.toLocaleString()} units`}</p>
        </div>
      );
    }
    return null;
  };
  
  export default function MetricChart({ data }) {
    return (
      <div style={{ height: 250, marginTop: 16 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar 
              dataKey="value" 
              fill="#8884d8" 
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
              name="Units Shipped"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }