import React, { useMemo,useRef } from 'react';
import EmpData from "../data/data.json";
import { AllCommunityModule } from 'ag-grid-community';
import { AgGridProvider } from 'ag-grid-react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
const GridTable = () => {
     const date=new Date(EmpData.employees[0].hireDate);
    console.log("Date is ",date.toDateString());

    const modules=[AllCommunityModule];
    // Column Definitions: Defines the columns to be displayed.
    const columns=useMemo(()=>(
 [
    { field: "id", sortable: true, filter: true,valueFormatter:(params)=>params.value || "--" },
    { field: "firstName", sortable: true, filter: true,valueFormatter:(params)=>params.value || "--" },
    { field: "lastName", sortable: true, filter: true,valueFormatter:(params)=>params.value || "--" },
    { field: "email", sortable: true, filter: true,valueFormatter:(params)=>params.value || "--" },
    { field: "department", sortable: true, filter: true,valueFormatter:(params)=>params.value || "--" },
    { field: "position", sortable: true, filter: true,valueFormatter:(params)=>params.value || "--" },
    { field: "salary", sortable: true, filter: true,valueFormatter:(params)=>params.value ? `₹${params.value}` :"--"},
    {field:"hireDate",sortable: true, filter: true,valueFormatter:(params)=>params.value ? new Date(params.value).toDateString().slice(4) : "--" },
    {field:"age",sortable: true, filter: true,valueFormatter:(params)=>params.value || "--" },
    {field:"location",sortable: true, filter: true,valueFormatter:(params)=>params.value || "--" },
    {field:"performanceRating",sortable: true, filter: true,valueFormatter:(params)=>params.value || "--" },
    {field:"projectsCompleted",sortable: true, filter: true,valueFormatter:(params)=>params.value || "--" },
    {field:"isActive",sortable: true, filter: true,valueFormatter:(params)=>params.value || "--" },
    {field:"skills",filter: true,valueFormatter:(params)=>Array.isArray(params.value) ? params.value.join(','):"--"},
    {field:"manager",sortable: true, filter: true,valueFormatter:(params)=>params.value || "--" },
  ]
    ),[]);

const defaultColDef = {
  sortable: true,
  filter: true,
  floatingFilter: true,
  resizable: true
};

//Method for exporting entire data in csv
const onExport = () => {
    if(gridRef.current){
    gridRef.current.api.exportDataAsCsv();
    }
  };

const gridRef = useRef();
 
 //Pagination size filters per page
 const paginationPageSizeSelector = [10, 25, 50];
  return (
    <div>
      <section className="table-section">
        <div className="table-header">
          <h2 className='subtitle'>Employees ({EmpData?.employees?.length || 0})</h2>
          <button onClick={onExport}>Export CSV</button>
      </div>
      </section>
      <AgGridProvider modules={modules}>

      <div style={{height:"500px"}}>
       <AgGridReact
         rowData={EmpData.employees}
         columnDefs={columns}
         pagination={true}
         paginationPageSize={10}
         paginationPageSizeSelector={paginationPageSizeSelector}
         defaultColDef={defaultColDef}
         ref={gridRef}
        />
      </div>
       
      </AgGridProvider>
    </div>
  )
}

export default GridTable;
