"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import DataTable, { Column } from '@/components/admin/DataTable';

type ChairpersonMessage = {
  id: string;
  name: string;
  title: string;
  message: string;
  imageUrl: string | null;
  departmentId: string;
  department?: {
    name: string;
  };
  createdAt: string;
  updatedAt: string;
};

type ViceChancellorMessage = {
  id: string;
  name: string;
  title: string;
  message: string;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

export default function AdminMessagesPage() {
  const [activeTab, setActiveTab] = useState<'chairperson' | 'vice_chancellor'>('chairperson');
  const [chairpersonMessages, setChairpersonMessages] = useState<ChairpersonMessage[]>([]);
  const [vcMessages, setVcMessages] = useState<ViceChancellorMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/messages');
        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }
        
        const data = await response.json();
        setChairpersonMessages(Array.isArray(data.chairperson) ? data.chairperson : []);
        setVcMessages(Array.isArray(data.viceChancellor) ? data.viceChancellor : []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching messages:', err);
        setError('Failed to load messages');
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/messages?type=${activeTab}&id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Failed to delete ${activeTab} message`);
      }

      // Refresh the messages list
      if (activeTab === 'chairperson') {
        setChairpersonMessages(chairpersonMessages.filter(msg => msg.id !== id));
      } else {
        setVcMessages(vcMessages.filter(msg => msg.id !== id));
      }
      
      return Promise.resolve();
    } catch (err) {
      console.error(`Error deleting ${activeTab} message:`, err);
      return Promise.reject(err);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const chairpersonColumns: Column<ChairpersonMessage>[] = [
    {
      header: 'Name',
      accessor: 'name'
    },
    {
      header: 'Title',
      accessor: 'title'
    },
    {
      header: 'Department',
      accessor: 'department.name'
    },
    {
      header: 'Last Updated',
      accessor: 'updatedAt',
      render: (row: ChairpersonMessage) => formatDate(row.updatedAt)
    },
    {
      header: 'Image',
      accessor: 'imageUrl',
      render: (row: ChairpersonMessage) => (
        row.imageUrl ? (
          <span className="text-accent hover:underline">
            <a href={row.imageUrl} target="_blank" rel="noopener noreferrer">
              View Image
            </a>
          </span>
        ) : (
          <span className="text-gray-400">None</span>
        )
      )
    }
  ];

  const vcColumns: Column<ViceChancellorMessage>[] = [
    {
      header: 'Name',
      accessor: 'name'
    },
    {
      header: 'Title',
      accessor: 'title'
    },
    {
      header: 'Last Updated',
      accessor: 'updatedAt',
      render: (row: ViceChancellorMessage) => formatDate(row.updatedAt)
    },
    {
      header: 'Image',
      accessor: 'imageUrl',
      render: (row: ViceChancellorMessage) => (
        row.imageUrl ? (
          <span className="text-accent hover:underline">
            <a href={row.imageUrl} target="_blank" rel="noopener noreferrer">
              View Image
            </a>
          </span>
        ) : (
          <span className="text-gray-400">None</span>
        )
      )
    }
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <p className="text-red-800">{error}</p>
        <button 
          onClick={() => {
            setLoading(true);
            setError(null);
            fetch('/api/messages')
              .then(res => res.json())
              .then(data => {
                setChairpersonMessages(Array.isArray(data.chairperson) ? data.chairperson : []);
                setVcMessages(Array.isArray(data.viceChancellor) ? data.viceChancellor : []);
                setLoading(false);
              })
              .catch(err => {
                console.error('Error fetching messages:', err);
                setError('Failed to load messages');
                setLoading(false);
              });
          }}
          className="mt-2 text-sm text-accent hover:underline"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <nav className="flex border-b border-gray-200">
          <button
            className={`py-4 px-6 font-medium text-sm ${
              activeTab === 'chairperson'
                ? 'border-b-2 border-accent text-accent'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('chairperson')}
          >
            Chairperson Messages
          </button>
          <button
            className={`py-4 px-6 font-medium text-sm ${
              activeTab === 'vice_chancellor'
                ? 'border-b-2 border-accent text-accent'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('vice_chancellor')}
          >
            Vice Chancellor Messages
          </button>
        </nav>
      </div>

      {activeTab === 'chairperson' && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Chairperson Messages</h1>
            <Link 
              href="/admin/messages/chairperson/add" 
              className="px-4 py-2 bg-accent text-black rounded hover:bg-accent-dark transition"
            >
              Add New Message
            </Link>
          </div>
          <DataTable
            data={chairpersonMessages}
            columns={chairpersonColumns}
            entityName="Chairperson Message"
            entityPath="messages/chairperson"
            primaryKey="id"
            onDelete={handleDelete}
          />
        </>
      )}

      {activeTab === 'vice_chancellor' && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Vice Chancellor Messages</h1>
            <Link 
              href="/admin/messages/vice-chancellor/add" 
              className="px-4 py-2 bg-accent text-black rounded hover:bg-accent-dark transition"
            >
              Add New Message
            </Link>
          </div>
          <DataTable
            data={vcMessages}
            columns={vcColumns}
            entityName="Vice Chancellor Message"
            entityPath="messages/vice-chancellor"
            primaryKey="id"
            onDelete={handleDelete}
          />
        </>
      )}
    </div>
  );
}
