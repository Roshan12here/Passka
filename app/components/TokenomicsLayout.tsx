"use client";

import { motion } from 'framer-motion';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Tokenomics from './tokenomics';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Component() {
  const allocationData = [
    { name: 'Investment In Projects', value: 56, color: '#14F195' },
    { name: 'Platform Development', value: 24, color: '#0CE7FA' },
    { name: 'Infrastructure', value: 12, color: '#009EFF' },
    { name: 'Marketing', value: 8, color: '#F32424' },
  ];

  const governanceData = [
    { name: 'PassKash Holders', value: 25, color: '#FFD700' },
    { name: 'Members', value: 25, color: '#4200FF' },
    { name: 'Leaders', value: 20, color: '#F500A2' },
    { name: 'Founders', value: 10, color: '#0CE7FA' },
    { name: 'Co-Creators', value: 20, color: '#009EFF' },
  ];

  const allocationChartData = {
    labels: allocationData.map(item => item.name),
    datasets: [
      {
        data: allocationData.map(item => item.value),
        backgroundColor: allocationData.map(item => item.color),
        borderColor: allocationData.map(item => item.color),
        borderWidth: 1,
      },
    ],
  };

  const governanceChartData = {
    labels: governanceData.map(item => item.name),
    datasets: [
      {
        data: governanceData.map(item => item.value),
        backgroundColor: governanceData.map(item => item.color),
        borderColor: governanceData.map(item => item.color),
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#0f0f0f] text-white p-8">
      <motion.h2
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl text-center font-bold text-[#C20E4D] mb-8"
      >
        Introduction to the PassKash
        <br />
        tokenomics
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: PassKash Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#310413] p-6 rounded-lg shadow-lg"
        >
          <Tokenomics />
        </motion.div>

        {/* Right Column: Allocation and Governance stacked vertically */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#310413] p-8 rounded-lg shadow-lg flex flex-col justify-between items-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Allocation Of Resources</h2>
            <div className="flex flex-col gap-4 items-center">
              {allocationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-white"
                >
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name} - {item.value}%</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-48 h-48 md:w-56 md:h-56 mt-4" // Added margin-top
            >
              <Pie data={allocationChartData} options={chartOptions} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#310413] p-8 rounded-lg shadow-lg flex flex-col justify-between items-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">PassKash Governance</h2>
            <div className="flex flex-col gap-4 items-center">
              {governanceData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-white"
                >
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name} - {item.value}%</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-48 h-48 md:w-56 md:h-56 mt-4" // Added margin-top
            >
              <Pie data={governanceChartData} options={chartOptions} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
