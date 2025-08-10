"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

type Program = {
  id: string;
  name: string;
};

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  programId: string | null;
  status: string;
  adminNotes: string | null;
  createdAt: string;
};

export default function EditAdmissionPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [programs, setPrograms] = useState<Program[]>([]);
  const [formData, setFormData] = useState<ContactSubmission>({
    id,
    name: "",
    email: "",
    phone: "",
    message: "",
    programId: "",
    status: "Pending",
    adminNotes: "",
    createdAt: new Date().toISOString(),
  });

  const statusOptions = [
    "Pending",
    "Contacted",
    "Enrolled",
    "Rejected",
    "Archived",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [submissionRes, programsRes] = await Promise.all([
          fetch(`/api/admissions/${id}`),
          fetch("/api/programs"),
        ]);

        if (!submissionRes.ok) throw new Error("Failed to fetch submission");
        if (!programsRes.ok) throw new Error("Failed to fetch programs");

        const [submissionData, programsData] = await Promise.all([
          submissionRes.json(),
          programsRes.json(),
        ]);

        setFormData({
          id: submissionData.id,
          name: submissionData.name || "",
          email: submissionData.email || "",
          phone: submissionData.phone || "",
          message: submissionData.message || "",
          programId: submissionData.programId || "",
          status: submissionData.status || "Pending",
          adminNotes: submissionData.adminNotes || "",
          createdAt: submissionData.createdAt,
        });

        setPrograms(Array.isArray(programsData) ? programsData : []);
      } catch (err) {
        console.error(err);
        setErrorMessage(
          err instanceof Error ? err.message : "Failed to load data"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(`/api/admissions/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to update submission");
      }

      router.push("/admin/admissions");
      router.refresh();
    } catch (err) {
      console.error(err);
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An error occurred while updating"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Unknown date";
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Manage Admission Inquiry</h2>
        <Link
          href="/admin/admissions"
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
        >
          Back to Admissions
        </Link>
      </div>

      {errorMessage && (
        <div className="mb-4 bg-red-50 p-4 rounded-md">
          <p className="text-red-800">{errorMessage}</p>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">
          Submission Details
        </h3>
        <p className="text-sm text-gray-500">
          Received on: {formatDate(formData.createdAt)}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone || ""}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>

          {/* Program */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Program
            </label>
            <select
              name="programId"
              value={formData.programId || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">General Inquiry (No Program)</option>
              {programs.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status *
            </label>
            <select
              name="status"
              required
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Original Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>

          {/* Admin Notes */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Admin Notes
            </label>
            <textarea
              name="adminNotes"
              rows={5}
              value={formData.adminNotes || ""}
              onChange={handleChange}
              placeholder="Add notes about communication, decisions, etc."
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/admin/admissions"
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-accent text-black rounded hover:bg-accent-dark disabled:opacity-50"
          >
            {isSubmitting ? "Saving..." : "Update Status"}
          </button>
        </div>
      </form>
    </div>
  );
}
