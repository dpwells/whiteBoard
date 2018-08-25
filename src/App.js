import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import tenants from './data.json'







const result = tenants.reduce((acc, tenant) => {
  const buildingIndex = acc.map(({ bldg }) => bldg ).indexOf(tenant.Bldg);
  if (buildingIndex === -1) acc.push({
    bldg: tenant.Bldg,
    floors: [{
      floor: tenant.Floor,
      units: [{
        unit: tenant.Unit,
        tenants: [{
          name: tenant.Name
        }]
      }]
    }]
  });
  else {
    const floors = acc[buildingIndex].floors
    const floorsIndex = floors.map(({ floor }) => floor ).indexOf(tenant.Floor);
    if (floorsIndex === -1) floors.push({
      floor: tenant.Floor,
      units: [{
        unit: tenant.Unit,
        tenants: [{
          name: tenant.Name
        }]
      }]
    })
    else {
      const units = floors[floorsIndex].units
      const unitsIndex = units.map(({ unit }) => unit ).indexOf(tenant.Unit);
      if (unitsIndex === -1) acc[buildingIndex].floors[floorsIndex].units.push({
        unit: tenant.Unit,
        tenants: [{
          name: tenant.Name
        }]
      })
      
      else {
        const tenants = units[unitsIndex].tenants;
        const tenantsIndex = tenants.map(({ unit }) => unit ).indexOf(tenant.Unit);

        if (tenantsIndex === -1) tenants.push({
          name: tenant.Name
        })
      }
    }
  }

  return acc;
}, []);

console.log(result)






class App extends Component {
  render() {
    // const stuffs = data.map((building) => {
    //   console.log(building)
    //   // return (
    //   // <div>
    //   //   <div>{ stuff.Bldg || 'OMG Becky...' }</div>
    //   // </div>
    //   // )
    // })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          {/* { stuffs } */}
      </div>
    );
  }
}

export default App;
