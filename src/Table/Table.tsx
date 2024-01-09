import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import IRuleStats from '../Interfaces/IRuleStats';


export default function DataTable(props: {content: IRuleStats[]}) {

  const {content} = props;

  const columns: GridColDef[] = Object.keys(content[0] || []).map((k: string, i) => {
    let row = { id: k, field: k, headerName: k, flex: i === 0 ? 1: 0}
    return row;
  })

  return (
    <div style={{ height: '100%', width: '100%' }}>
      {content.length === 0 ? '':
        <DataGrid
          rows={content}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 100 },
            },
          }}
          getRowId={(row) => row.name}
          pageSizeOptions={[100]}
          checkboxSelection
        />
      }
    </div>
  );
}