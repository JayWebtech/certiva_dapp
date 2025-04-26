'use client'

import React, {useEffect, useState} from "react"
import Sidebar from "@/components/dashboard/Sidebar"
import Header from "@/components/dashboard/Header"
import {useSearchParams, usePathname} from 'next/navigation'
// import type { Metadata } from "next"

// export const metadata: Metadata = {
//   title: "Dashboard | Unichain",
//   description: "Unichain dashboard for certificate verification and management",
// }

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [urlData, setUrlData] = useState({});

    useEffect(()=>{
        // Extract data from url
        const path  = pathname?.split("/") || [];
        const section = path[path.length - 1] ||"dashboard"

        // Get search params 
        const params: Record<string, string> = {};
        searchParams.forEach((value, key) => {
            params[key] = value;
        });

         // You can also extract path parameters if needed
        setUrlData({
            section,
            params,
            fullPath: pathname
        });
    }, [pathname, searchParams]);


  return (
    <>
      
        <div className="flex bg-black text-white min-h-screen">
            <Sidebar />
            <div className="flex-1 border-l border-zinc-800"><Header urlData={urlData}/>{children}</div>
        </div>
    </>
  )
}
