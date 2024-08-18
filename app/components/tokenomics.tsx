"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = [
  { label: 'ICO', percent: 50, color: '#14F195' },
  { label: 'Reward', percent: 10, color: '#0CE7FA' },
  { label: 'Marketing', percent: 15, color: '#009EFF' },
  { label: 'Team', percent: 10, color: '#F32424' },
  { label: 'Market Liquidity Reserve', percent: 5, color: '#F500A2' },
  { label: 'Advisors', percent: 5, color: '#4200FF' },
  { label: 'Founders', percent: 5, color: '#FFD700' },
];

const chartData = {
  labels: data.map(item => item.label),
  datasets: [
    {
      data: data.map(item => item.percent),
      backgroundColor: data.map(item => item.color),
      borderColor: data.map(item => item.color),
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Tokenomics = () => {
  return (
    <section className='flex  flex-col py-4 items-center'>
      <div className="flex flex-col items-center justify-center min-h-screen from-[#000000] via-[#331029] to-[#310413]">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col gap-4 items-center">
          <h2 className="text-2xl font-bold mb-4">PassKash distribution</h2>
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-white"
              >
          
                <span
                  className={`w-4 h-4 rounded-full`}
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="text-sm">{item.label} - {item.percent}%</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-56 h-56 md:w-64 md:h-64" // Reduced width and height
          >
            <Pie data={chartData} options={chartOptions} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
