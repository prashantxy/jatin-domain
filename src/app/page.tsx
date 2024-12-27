import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MainNav } from "@/components/main-nav"
import { ServiceTabs } from "@/components/service-tabs"
import { GovernmentSolutions } from "@/components/government-solutions"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Navigation */}
      <MainNav />

      {/* Hero Section */}
      <div className="bg-[#003A6B] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-sm">VFS Global for Governments</div>
          <h1 className="text-4xl font-semibold mb-8">Government Solutions</h1>
          
          {/* Service Tabs */}
          <ServiceTabs />

          {/* Country Selection Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Government Entity</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immigration">Immigration Department</SelectItem>
                    <SelectItem value="foreign">Foreign Affairs</SelectItem>
                    <SelectItem value="interior">Interior Ministry</SelectItem>
                    <SelectItem value="embassy">Embassy Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Service Type</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visa">Visa Processing</SelectItem>
                    <SelectItem value="permit">Permit Management</SelectItem>
                    <SelectItem value="identity">Identity Services</SelectItem>
                    <SelectItem value="citizen">Citizen Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                Access Government Portal
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Government Solutions Section */}
      <GovernmentSolutions />
    </div>
  )
}

