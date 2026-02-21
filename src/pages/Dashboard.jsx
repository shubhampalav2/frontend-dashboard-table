import React from 'react'
import GridTable from '../components/GridTable';
import '../css/dashboard.css';

const Dashboard = () => {
  return (
    <div className='page'>
    <div className="container">
      <header className="header">
         <h1>Employee Management</h1>
      </header>
      <GridTable/>
    </div>
    </div>
  )
}

export default Dashboard;
