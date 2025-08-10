"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DataTable, { Column } from '@/components/admin/DataTable';

type Event = {
  id: string;
  title: string;
  description: string;
  eventType: string;
  date: string;
  venue: string | null;
  imageUrl: string | null;
  departmentId: string | null;
  department?: {
    name: string;
  };
};

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events data');
        }
        
        const data = await response.json();
        setEvents(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events data');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/events?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete event');
      }

      // Refresh the events list
      setEvents(events.filter(event => event.id !== id));
      return Promise.resolve();
    } catch (err) {
      console.error('Error deleting event:', err);
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

  const columns: Column<Event>[] = [
    {
      header: 'Title',
      accessor: 'title'
    },
    {
      header: 'Type',
      accessor: 'eventType',
      render: (row: Event) => {
        const typeClasses = {
          conference: 'bg-blue-100 text-blue-800',
          seminar: 'bg-green-100 text-green-800',
          workshop: 'bg-purple-100 text-purple-800',
          lecture: 'bg-yellow-100 text-yellow-800',
          other: 'bg-gray-100 text-gray-800',
        };
        
        const type = row.eventType.toLowerCase();
        const typeClass = typeClasses[type as keyof typeof typeClasses] || typeClasses.other;
        
        return (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeClass}`}>
            {row.eventType}
          </span>
        );
      }
    },
    {
      header: 'Date',
      accessor: 'date',
      render: (row: Event) => formatDate(row.date)
    },
    {
      header: 'Venue',
      accessor: 'venue',
      render: (row: Event) => row.venue || 'N/A'
    },
    {
      header: 'Department',
      accessor: 'department.name',
      render: (row: Event) => row.department?.name || 'All Departments'
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
            fetch('/api/events')
              .then(res => res.json())
              .then(data => {
                setEvents(Array.isArray(data) ? data : []);
                setLoading(false);
              })
              .catch(err => {
                console.error('Error fetching events:', err);
                setError('Failed to load events data');
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Events</h1>
        <Link 
          href="/admin/events/add" 
          className="px-4 py-2 bg-accent text-black rounded hover:bg-accent-dark transition"
        >
          Add New Event
        </Link>
      </div>
      <DataTable
        data={events}
        columns={columns}
        entityName="Event"
        entityPath="events"
        primaryKey="id"
        onDelete={handleDelete}
      />
    </div>
  );
}
