import { Skeleton } from "@/components/ui/skeleton"

export default function GanhosLoading() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Skeleton */}
      <div className="hidden md:block w-64 bg-white border-r h-screen"></div>

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-6xl mx-auto">
          {/* Header Skeleton */}
          <div className="mb-8">
            <Skeleton className="h-8 w-64 mb-2" />
            <Skeleton className="h-4 w-96" />
          </div>

          {/* Summary Cards Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-32 rounded-lg" />
            ))}
          </div>

          {/* Period Selector Skeleton */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <Skeleton className="h-10 w-[180px]" />
            <Skeleton className="h-10 w-40" />
          </div>

          {/* Table Skeleton */}
          <Skeleton className="h-96 rounded-lg mb-8" />

          {/* Payments Skeleton */}
          <Skeleton className="h-64 rounded-lg mb-8" />

          {/* Analytics Skeleton */}
          <Skeleton className="h-96 rounded-lg" />
        </div>
      </div>
    </div>
  )
}

