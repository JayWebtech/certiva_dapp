import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Edit2, ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from '@/components/ui/Checkbox';
import CustomModal from '@/components/modal/CustomModal';
import { Button } from '@/components/form';

export type GraduateCertificate = {
  id: string;
  graduateName: string;
  graduateYear: number;
  titleMajor: string;
  status: 'Active' | 'Revoked';
};

export const columns: ColumnDef<GraduateCertificate>[] = [
  {
    id: 'expand',
    header: () => null,
    cell: ({ row, table }) => {
      const { expandedRows, toggleRow } = table.options.meta as {
        expandedRows: Record<string, boolean>;
        toggleRow: (id: string) => void;
      };
      return (
        <button
          onClick={() => toggleRow(row.id)}
          className='text-zinc-400 hover:text-zinc-200 bg-transparent border-none p-0'
        >
          {expandedRows[row.id] ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </button>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onChange={(value) =>
          table.toggleAllPageRowsSelected(!!value.target.checked)
        }
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onChange={(value) => row.toggleSelected(!!value.target.checked)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'graduateName',
    header: ({ column }) => (
      <button
        className='flex items-center space-x-1 hover:text-white text-zinc-300 bg-transparent border-none p-0'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        <span>Graduate</span>
        <ArrowUpDown
          className={`ml-2 h-4 w-4 ${column.getIsSorted() ? 'text-white' : 'text-zinc-500'}`}
        />
      </button>
    ),
    cell: ({ row, table }) => {
      const graduate = row.original;
      const { expandedRows } = table.options.meta as {
        expandedRows: Record<string, boolean>;
      };
      return (
        <div>
          <div className='font-medium'>{graduate.graduateName}</div>
          <div className='text-sm text-[#757575]'>{graduate.graduateYear}</div>
          {expandedRows[row.id] && (
            <div className='text-xs mt-2 text-zinc-500'>
              {/* Add details you want to show on expand here */}
              More details for {graduate.graduateName}...
            </div>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: 'titleMajor',
    header: 'Title/Major',
    cell: ({ row }) => (
      <div className='text-sm text-[#757575]'>{row.getValue('titleMajor')}</div>
    ),
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <button
        className='flex items-center space-x-1 hover:text-white text-zinc-300 bg-transparent border-none p-0'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        <span>Status</span>
        <ArrowUpDown
          className={`ml-2 h-4 w-4 ${column.getIsSorted() ? 'text-white' : 'text-zinc-500'}`}
        />
      </button>
    ),
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      const isActive = status === 'Active';
      return (
        <div className='flex items-center'>
          <span
            className={`h-2 w-2 rounded-full mr-2 ${
              isActive ? 'bg-green-500' : 'bg-gray-500'
            }`}
          />
          <span className='text-sm text-zinc-100'>{status}</span>
        </div>
      );
    },
  },
  {
    id: 'actions',
    header: () => null,
    cell: ({ row, table }) => {
      const { openRevokeCertificate, setOpenRevokeCertificate } = table.options
        .meta as {
        openRevokeCertificate: Record<string, boolean>;
        setOpenRevokeCertificate: (
          openRevokeCertificate: Record<string, boolean>
        ) => void;
      };
      return (
        <>
          <button
            onClick={() =>
              setOpenRevokeCertificate({
                ...openRevokeCertificate,
                [row.id]: true,
              })
            }
            className='cursor-pointer text-zinc-400 hover:text-zinc-200 bg-transparent border-none p-0'
          >
            <Edit2 size={16} />
          </button>

          {openRevokeCertificate[row.id] && (
            <CustomModal
              Content={() => (
                <div className='py-5 px-4'>
                  <div>
                    <h5 className='text-2xl font-semibold'>
                      Are you sure you want to revoke
                      <br />
                      <span className='text-primary'>Certificate?</span>
                    </h5>
                  </div>
                  <div className='mt-10 flex space-x-4'>
                    <Button
                      title='Cancel'
                      variant='secondary'
                      className='bg-white !text-black'
                    />
                    <Button title='Revoke certificate' variant='primary' />
                  </div>
                </div>
              )}
              closeModal={() => setOpenRevokeCertificate({})}
              hideFooter
            />
          )}
        </>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
