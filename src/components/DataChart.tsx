
import React from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import { cn } from '@/lib/utils';

interface DataChartProps {
  className?: string;
  data: any[];
  type?: 'line' | 'area' | 'bar' | 'pie';
  height?: number;
  width?: string;
  colors?: string[];
  title?: string;
  subtitle?: string;
  showLegend?: boolean;
  showGrid?: boolean;
  showTooltip?: boolean;
  dataKeys?: string[];
}

const defaultColors = [
  '#0070F3', // insscrub-500
  '#27AB83', // teal-500
  '#8A3FFC', // purple-500
  '#3B82F6', // blue-500
  '#F97316', // orange-500
  '#10B981', // emerald-500
];

const DataChart: React.FC<DataChartProps> = ({
  className,
  data,
  type = 'line',
  height = 300,
  width = '100%',
  colors = defaultColors,
  title,
  subtitle,
  showLegend = true,
  showGrid = true,
  showTooltip = true,
  dataKeys = ['value']
}) => {
  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey="name" />
            <YAxis />
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
            {dataKeys.map((key, index) => (
              <Line 
                key={key}
                type="monotone" 
                dataKey={key} 
                stroke={colors[index % colors.length]} 
                strokeWidth={2}
                activeDot={{ r: 8 }}
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            ))}
          </LineChart>
        );
      
      case 'area':
        return (
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey="name" />
            <YAxis />
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
            {dataKeys.map((key, index) => (
              <Area 
                key={key}
                type="monotone" 
                dataKey={key} 
                fill={colors[index % colors.length]} 
                stroke={colors[index % colors.length]}
                fillOpacity={0.3}
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            ))}
          </AreaChart>
        );
      
      case 'bar':
        return (
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey="name" />
            <YAxis />
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
            {dataKeys.map((key, index) => (
              <Bar 
                key={key}
                dataKey={key} 
                fill={colors[index % colors.length]} 
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            ))}
          </BarChart>
        );
      
      case 'pie':
        return (
          <PieChart>
            {dataKeys.map((key, index) => (
              <Pie
                key={key}
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80 + (index * 10)}
                fill={colors[index % colors.length]}
                dataKey={key}
                nameKey="name"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                {data.map((entry, entryIndex) => (
                  <Cell key={`cell-${entryIndex}`} fill={colors[entryIndex % colors.length]} />
                ))}
              </Pie>
            ))}
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
          </PieChart>
        );
    }
  };

  return (
    <div className={cn("flex flex-col rounded-xl p-6 bg-white dark:bg-gray-800 shadow-card", className)}>
      {title && <h3 className="text-xl font-bold mb-1">{title}</h3>}
      {subtitle && <p className="text-gray-500 dark:text-gray-400 mb-4">{subtitle}</p>}
      <div className="w-full h-full">
        <ResponsiveContainer width={width} height={height}>
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DataChart;
