import { createContext, useContext } from 'react';
import { mockDistributors } from '../data/mockDistributors';

const DataContext = createContext();

export function DataProvider({ children }) {
  // Calculate summary statistics
  const summary = mockDistributors.reduce((acc, curr) => ({
    lastMonth: acc.lastMonth + curr.lastMonthShipped,
    forecast: acc.forecast + curr.forecastThisMonth,
    ytd: acc.ytd + curr.ytdAverage,
    count: acc.count + 1
  }), { lastMonth: 0, forecast: 0, ytd: 0, count: 0 });

  const value = {
    distributors: mockDistributors,
    summary: {
      lastMonth: summary.lastMonth,
      forecast: summary.forecast,
      ytdAverage: summary.ytd / summary.count
    }
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  return useContext(DataContext);
}