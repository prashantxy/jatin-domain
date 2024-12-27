"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ServiceTabs() {
  return (
    <Tabs defaultValue="visa-services" className="w-full">
      <TabsList className="h-auto bg-white p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <TabsTrigger
          value="visa-services"
          className="data-[state=active]:bg-white data-[state=active]:text-blue-600 py-4 px-6 rounded-none border-r"
        >
          Visa Services
        </TabsTrigger>
        <TabsTrigger
          value="identity"
          className="data-[state=active]:bg-white data-[state=active]:text-blue-600 py-4 px-6 rounded-none border-r"
        >
          Identity & Citizen Services
        </TabsTrigger>
        <TabsTrigger
          value="consular"
          className="data-[state=active]:bg-white data-[state=active]:text-blue-600 py-4 px-6 rounded-none border-r"
        >
          Consular Services
        </TabsTrigger>
        <TabsTrigger
          value="technology"
          className="data-[state=active]:bg-white data-[state=active]:text-blue-600 py-4 px-6 rounded-none"
        >
          Technology Solutions
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

