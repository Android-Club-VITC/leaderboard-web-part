import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table';
import Edit from '@material-ui/icons/Edit';
import { forwardRef } from 'react';
import Create from "./index.jsx";


const tableIcons = {
  
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />)
  
};




function App() {

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "id" },
    { title: "Username", field: "username" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
    { title: "Web Link", field: 'website' }
  ]
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }, [])

  return (
    <div className="App">
      <h1 align="center">View Members Screen</h1>
      
      <MaterialTable icons={tableIcons}
        
        data={data}
        columns={columns}
        
        
        actions={[
          {
            
            icon: () => <Edit />,
            tooltip: 'Edit User',
            onClick : Create
              
            
           


          }
        ]}
        
      />
    </div>
  );
}

export default App;
