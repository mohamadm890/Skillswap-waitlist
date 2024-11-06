// components/TokenSpendingTracker.js
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TokenSpend = () => {
  const [spendingData, setSpendingData] = useState([
    { date: '2023-10-09', amount: 50 },
    { date: '2023-10-10', amount: 100 },
    { date: '2023-10-11', amount: 75 },
  ]);
  
  const [newDate, setNewDate] = useState('');
  const [newAmount, setNewAmount] = useState('');

  // Update chart data based on spending data
  const chartData = {
    labels: spendingData.map(entry => entry.date),
    datasets: [
      {
        label: 'مستخدمة',
        data: spendingData.map(entry => entry.amount),
        backgroundColor: '#91D6A8',
      },
    ],
  };

 

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'عدد كلمات مستخدمة',
      },
    },
  };

  return (
    <div style={{backgroundColor:"white", width:"300px", height:"auto", borderRadius:"24px", border:"1px solid #F0F2F5", padding:"16px" 
}}>
      <Bar data={chartData} options={options} />
      
      
    </div>
  );
};

export default TokenSpend;
