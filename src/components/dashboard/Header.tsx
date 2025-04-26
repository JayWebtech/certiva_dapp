import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { PanelLeft } from "lucide-react";

interface UrlData {
  section?: string;
  params?: Record<string, string>;
  fullPath?: string;
}

interface HeaderProps {
  title?: string;  
  breadcrumbs?: string[];  
  walletAddress?: string;  
  urlData?: UrlData;
}

export default function Header({ title, breadcrumbs = ["Dashboard"], walletAddress = "Connect Wallet", urlData }: HeaderProps) {
  // You could derive breadcrumbs from urlData if needed
  const derivedBreadcrumbs = urlData?.fullPath
    ? urlData.fullPath.split('/').filter(Boolean)
    : breadcrumbs;
  
  return (
    <header className="border-b border-zinc-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-400 gap-4">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <ChevronRight size={14} className="mx-2" />}
              <Link
                href={`/dashboard/${crumb.toLowerCase().replace(/\s+/g, "-")}`}
                className={index === breadcrumbs.length - 1 ? "text-gray-300" : ""}
              >
                <div className="flex items-center gap-4">
                  <PanelLeft />
                  <span className="text-gray-400">{crumb}</span>
              
                </div>
              </Link>
            </div>
          ))}
          <span className="text-gray-400">/</span>
          {urlData?.section && urlData.section !== "dashboard" && (
            <div className="ml-4 text-[#A3FF50] px-2 py-0.5 rounded">
              {urlData.section}
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          {urlData?.params && Object.keys(urlData.params).length > 0 && (
            <div className="text-xs text-gray-500">
              {Object.entries(urlData.params).map(([key, value]) => (
                <span key={key} className="mr-2">{key}: {value}</span>
              ))}
            </div>
          )}
          <button className="bg-[#A3FF50] text-black px-4 py-1.5 rounded-md text-sm font-medium">
            {walletAddress}
          </button>
        </div>
      </div>
    </header>
  )
}