"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export type Column<T> = {
  header: string;
  accessor: keyof T | string;
  render?: (row: T) => React.ReactNode;
};

type DataTableProps<T extends Record<string, unknown>> = {
  data: T[];
  columns: Column<T>[];
  entityName: string;
  entityPath: string;
  primaryKey?: keyof T;
  onDelete?: (id: string) => Promise<void>;
};

export default function DataTable<T extends Record<string, unknown>>(
{
  data,
  columns,
  entityName,
  entityPath,
  primaryKey = 'id' as keyof T,
  onDelete
}: DataTableProps<T>) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

  const handleEdit = (id: string) => {
    router.push(`/admin/${entityPath}/edit/${id}`);
  };

  const handleDelete = async (id: string) => {
    if (!onDelete) return;
    
    if (window.confirm(`Are you sure you want to delete this ${entityName.toLowerCase()}?`)) {
      setIsDeleting(id);
      try {
        await onDelete(id);
        router.refresh();
      } catch (error) {
        console.error('Error deleting item:', error);
        alert('Failed to delete item');
      } finally {
        setIsDeleting(null);
      }
    }
  };

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    
    setSortConfig({ key, direction });
  };

  // Apply sorting if configured
  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    
    return [...data].sort((a, b) => {
      // Get the values by key safely
      const key = sortConfig.key as keyof typeof a;
      const aValue = a[key];
      const bValue = b[key];
      
      if (aValue === bValue) return 0;
      
      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;
      
      // Type-safe comparison
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortConfig.direction === 'asc' 
          ? aValue.localeCompare(bValue) 
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      // Default case: convert to string and compare
      return sortConfig.direction === 'asc' 
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
  }, [data, sortConfig]);

  // Helper function to get a value by path (e.g., "user.name")
  const getValueByPath = (obj: T, path: string): unknown => {
    return path.split('.').reduce((acc, part) => {
      return acc && typeof acc === 'object' && acc !== null && part in acc
        ? (acc as Record<string, unknown>)[part]
        : null;
    }, obj as unknown);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{entityName} List</h2>
        <Link
          href={`/admin/${entityPath}/add`}
          className="px-4 py-2 bg-accent text-black rounded hover:bg-accent-dark transition"
        >
          Add New {entityName}
        </Link>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-scroll w-full">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={String(column.accessor)}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort(String(column.accessor))}
                  >
                    <div className="flex items-center">
                      {column.header}
                      {sortConfig?.key === column.accessor && (
                        <span className="ml-1">
                          {sortConfig.direction === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedData.length === 0 ? (
                <tr>
                  <td colSpan={columns.length + 1} className="px-6 py-4 text-center text-gray-500">
                    No {entityName.toLowerCase()} found
                  </td>
                </tr>
              ) : (
                sortedData.map((row) => (
                  <tr key={String(row[primaryKey])} className="hover:bg-gray-50">
                    {columns.map((column) => (
                      <td key={`${String(row[primaryKey])}-${String(column.accessor)}`} className="px-6 py-4 whitespace-nowrap">
                        {column.render 
                          ? column.render(row)
                          : renderCellValue(getValueByPath(row, String(column.accessor)))}
                      </td>
                    ))}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEdit(String(row[primaryKey]))}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        Edit
                      </button>
                      {onDelete && (
                        <button
                          onClick={() => handleDelete(String(row[primaryKey]))}
                          className="text-red-600 hover:text-red-900"
                          disabled={isDeleting === String(row[primaryKey])}
                        >
                          {isDeleting === String(row[primaryKey]) ? 'Deleting...' : 'Delete'}
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function renderCellValue(value: unknown): React.ReactNode {
  if (value === null || value === undefined) {
    return <span className="text-gray-400">—</span>;
  }

  if (typeof value === 'boolean') {
    return value ? (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
        Yes
      </span>
    ) : (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
        No
      </span>
    );
  }

  if (value instanceof Date) {
    return value.toLocaleDateString();
  }

  if (typeof value === 'object' && value !== null) {
    return <span>{JSON.stringify(value)}</span>;
  }

  // Truncate long strings
  if (typeof value === 'string' && value.length > 100) {
    return <span>{value.substring(0, 100)}...</span>;
  }

  return String(value);
}
