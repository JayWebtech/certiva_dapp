"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

type Certificate = {
  id: string
  timestamp: string
  date: string
  time: string
  status: "success" | "failed"
}

export default function VerificationTable() {
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({})
  const [sortField, setSortField] = useState<"timestamp" | "status" | null>("timestamp")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  const certificates: Certificate[] = [
    {
      id: "xxxxxxxxxxxxxxxxxx",
      timestamp: "12th May, 2024",
      date: "12th May, 2024",
      time: "12:34:94 pm",
      status: "success",
    },
    {
      id: "xxxxxxxxxxxxxxxxxx",
      timestamp: "14th March, 2024",
      date: "14th March, 2024",
      time: "12:34:94 pm",
      status: "success",
    },
    {
      id: "xxxxxxxxxxxxxxxxxx",
      timestamp: "12th March, 2028",
      date: "12th March, 2028",
      time: "06:45 pm",
      status: "failed",
    },
  ]

  const handleSort = (field: "timestamp" | "status") => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  const sortedCertificates = [...certificates].sort((a, b) => {
    if (sortField === "timestamp") {
      const dateA = new Date(a.date.replace("th", "").replace("st", "").replace("nd", "").replace("rd", ""))
      const dateB = new Date(b.date.replace("th", "").replace("st", "").replace("nd", "").replace("rd", ""))
      return sortDirection === "asc" ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime()
    } else if (sortField === "status") {
      return sortDirection === "asc" ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status)
    }
    return 0
  })

  const toggleRow = (index: number) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-950 overflow-x-auto">
      <div className="min-w-full">
        <table className="w-full">
          <thead className="bg-zinc-900">
            <tr className="border-b border-zinc-800 text-zinc-300">
              <th className="w-10 p-3"></th>
              <th className="w-10 p-3 hidden sm:table-cell"></th>
              <th className="p-3 text-left font-medium text-sm">
                <button onClick={() => handleSort("timestamp")} className="flex items-center space-x-1 hover:text-white">
                  <span>Timestamp</span>
                  <ChevronDown size={14} className={sortField === "timestamp" ? "text-white" : "text-zinc-500"} />
                </button>
              </th>
              <th className="p-3 text-left font-medium text-sm hidden md:table-cell">
                <div className="flex items-center space-x-1">
                  <span>Certificate ID</span>
                </div>
              </th>
              <th className="p-3 text-left font-medium text-sm">
                <button onClick={() => handleSort("status")} className="flex items-center space-x-1 hover:text-white">
                  <span>Status</span>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedCertificates.map((cert, index) => (
              <tr key={index} className="border-b border-zinc-800 text-zinc-100 hover:bg-zinc-900/50">
                <td className="p-3">
                  <button onClick={() => toggleRow(index)} className="text-zinc-400 hover:text-zinc-200">
                    {expandedRows[index] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </td>
                <td className="p-3 hidden sm:table-cell">
                  <div className="flex items-center justify-center h-4 w-4 rounded border border-zinc-700">
                    <input type="checkbox" className="opacity-0 absolute" />
                  </div>
                </td>
                <td className="p-3">
                  <div>
                    <div className="font-medium">{cert.date}</div>
                    <div className="text-sm text-zinc-400">{cert.time}</div>
                    <div className="text-xs font-mono text-zinc-400 mt-1 break-all md:hidden">
                      ID: {cert.id}
                    </div>
                  </div>
                </td>
                <td className="p-3 font-mono text-sm hidden md:table-cell text-gray-400">{cert.id}</td>
                <td className="p-3">
                  <div className="flex items-center">
                    <span
                      className={`h-2 w-2 rounded-full mr-2 ${cert.status === "success" ? "bg-green-500" : "bg-red-500"}`}
                    />
                    <span>{cert.status}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-3 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center text-sm text-zinc-400">
        <div className="mb-3 sm:mb-0">Showing {sortedCertificates.length} entries</div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 rounded border border-zinc-700 hover:bg-zinc-800">Prev</button>
          <button className="px-3 py-1 rounded border border-zinc-700 hover:bg-zinc-800">Next</button>
        </div>
      </div>
    </div>
  )
}