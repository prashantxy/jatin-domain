import Link from "next/link"
import Image from "next/image"

export function MainNav() {
  return (
    <div className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-8">
              <Image
                src="/placeholder.svg"
                alt="VFS Global"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-sm font-medium hover:text-blue-600">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-blue-600">
                About
              </Link>
              <Link href="/solutions" className="text-sm font-medium hover:text-blue-600">
                Solutions
              </Link>
              <Link href="/case-studies" className="text-sm font-medium hover:text-blue-600">
                Case Studies
              </Link>
              <Link href="/technology" className="text-sm font-medium hover:text-blue-600">
                Technology
              </Link>
              <Link href="/partnerships" className="text-sm font-medium hover:text-blue-600">
                Partnerships
              </Link>
              <Link href="/compliance" className="text-sm font-medium hover:text-blue-600">
                Compliance
              </Link>
            </nav>
          </div>
          <Link
            href="/contact"
            className="text-sm font-medium text-orange-500 hover:text-orange-600"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  )
}

