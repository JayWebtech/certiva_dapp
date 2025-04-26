'use client';

import * as React from 'react';
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  RowSelectionState,
} from '@tanstack/react-table';
import { GraduateCertificate, columns } from './CertificatesTableColumns';

// Mock data (can be fetched from API later)
const data: GraduateCertificate[] = [
  {
    id: 'leo-abrams-2024',
    graduateName: 'Leo Abrams',
    graduateYear: 2024,
    titleMajor: 'BSc in Computer Science',
    status: 'Active',
  },
  {
    id: 'ally-hillcrest-2023',
    graduateName: 'Ally Hillcrest',
    graduateYear: 2023,
    titleMajor: 'MBBS in Medicine & Surgery',
    status: 'Active',
  },
  {
    id: 'sandra-lei-2025',
    graduateName: 'Sandra Lei',
    graduateYear: 2025,
    titleMajor: 'BTech in Physics',
    status: 'Revoked',
  },
  // Add more mock data as needed
];

export default function CertificatesTable() {
  const [expandedRows, setExpandedRows] = React.useState<
    Record<string, boolean>
  >({});

  const [sorting, setSorting] = React.useState<SortingState>([
    { id: 'graduateName', desc: false },
  ]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});

  // Function to toggle row expansion
  const toggleRow = (rowId: string) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    enableRowSelection: true,
    initialState: {
      pagination: {
        pageSize: 10, // Adjust page size as needed
      },
    },
    meta: {
      expandedRows,
      toggleRow,
    },
  });

  return (
    <div className='rounded-lg border border-zinc-800 bg-zinc-950 overflow-x-auto'>
      <div className='min-w-full'>
        <table className='w-full'>
          <thead className='bg-zinc-900'>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className='border-b border-zinc-800 text-zinc-300'
              >
                {/* Add empty first header cell for expand button column */}
                <th className='w-10 p-3'></th>
                {headerGroup.headers.map((header) => {
                  // Skip rendering the header for the 'expand' column as it's handled by the empty th above
                  if (header.id === 'expand') return null;
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className={`p-3 text-left font-medium text-sm ${
                        header.id === 'select' ? 'w-10 text-center' : ''
                      } ${
                        header.id === 'titleMajor' ? 'hidden md:table-cell' : ''
                      } ${header.id === 'actions' ? 'w-16 text-center' : ''}`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <React.Fragment key={row.id}>
                  <tr
                    className='border-b border-zinc-800 text-zinc-100 hover:bg-zinc-900/50 data-[selected=true]:bg-zinc-900'
                    data-selected={row.getIsSelected() || undefined}
                  >
                    {/* Add empty first cell like VerificationTable if needed for icons */}
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className={`p-3 align-top ${
                          cell.column.id === 'select'
                            ? 'hidden sm:table-cell text-center'
                            : ''
                        } ${cell.column.id === 'expand' ? 'text-center' : ''} ${
                          cell.column.id === 'actions' ? 'text-center' : ''
                        } ${
                          cell.column.id === 'titleMajor'
                            ? 'font-mono text-sm hidden md:table-cell text-gray-400'
                            : ''
                        }`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className='h-24 text-center text-zinc-400 p-3'
                >
                  No results.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {/* <div className='p-3 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center text-sm text-zinc-400'>
        <div className='mb-3 sm:mb-0'>
          Showing {table.getFilteredRowModel().rows.length} entries
        </div>
        <div className='flex space-x-2'>
          <button
            className='px-3 py-1 rounded border border-zinc-700 hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Prev
          </button>
          <button
            className='px-3 py-1 rounded border border-zinc-700 hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </button>
        </div>
      </div> */}
      {/* <div className='flex-1 text-zinc-400 p-3'>
        {table.getFilteredSelectedRowModel().rows.length} of{' '}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div> */}
    </div>
  );
}
