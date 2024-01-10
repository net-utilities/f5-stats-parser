import * as React from 'react';
import {DataGrid, GridColDef, GridColumnGroupingModel} from '@mui/x-data-grid';
import IRuleStats from '../Interfaces/IRuleStats';

export default function DataTable(props: {content: IRuleStats[]}) {

  const {content} = props;

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'name', flex: 1 },
    { field: 'priority', headerName: 'priority' },
    { field: 'executions', headerName: 'executions' },
    { field: 'failures', headerName: 'failures', flex: 0 },
    { field: 'aborts', headerName: 'aborts', flex: 0 },
    { field: 'average', headerName: 'average', flex: 0 },
    { field: 'maximum', headerName: 'maximum', flex: 0 },
    { field: 'minimum', headerName: 'minimum', flex: 0 }
  ]

  const columnGroupingModel: GridColumnGroupingModel = [
    {
      groupId: 'Total',
      description: 'Total',
      headerAlign: 'center',
      children: [{ field: 'executions'}, { field: 'failures'}, { field: 'aborts' }],
    },
    {
      groupId: 'CPU',
      description: 'CPU Cycles on Executing',
      headerAlign: 'center',
      children: [{ field: 'average'}, { field: 'maximum'}, { field: 'minimum' }],
    },
  ]

  return (
    <div style={{ height: '100%', width: '100%' }}>
      {content.length === 0 ? '':
        <DataGrid
          experimentalFeatures={{ columnGrouping: true }}
          rows={content}
          columns={columns}
          columnGroupingModel={columnGroupingModel}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 100 },
            },
          }}
          getRowId={(row) => row.name}
          pageSizeOptions={[100]}
        />
      }
    </div>
  );
}