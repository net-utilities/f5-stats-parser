import * as React from 'react';
import {DataGrid, GridColDef, GridToolbar} from '@mui/x-data-grid';
import filterFunctions from '../../Helpers/FieldTranslations';
import {LTMObject} from '../../Interfaces/interfaces';

export default function DataTable(props: {ltmData: LTMObject[]}) {

  const {ltmData} = props;

  let columns: GridColDef[] = [];

  const {type} = ltmData[0];
  let { defaultColumns, columnTranslations } = type in filterFunctions ? filterFunctions[type] : { defaultColumns: [], columnTranslations: {}};

  columns.push({ field: 'name', headerName: 'name', flex: 1 })
  Object.keys(ltmData[0]).filter(k => !['name', 'type', 'id'].includes(k)).forEach((k) => {
      columns.push({ field: k, headerName: (columnTranslations && columnTranslations[k]) || k});
  });

  const columnVisibility: {[key: string]: boolean} = {}
  const allDefault = defaultColumns.length === 0;
  columns.forEach(c => {
    columnVisibility[c.field] = defaultColumns.includes(c.field) || allDefault;
  })

  return (
    <div style={{ height: '100%', width: '100%' }}>
      {ltmData.length === 0 ? '':
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          density='compact'
          experimentalFeatures={{ columnGrouping: true }}
          rows={ltmData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 100 },
            },
            columns: {
              columnVisibilityModel: columnVisibility,
            },
          }}
          pageSizeOptions={[100]}
        />
      }
    </div>
  );
}