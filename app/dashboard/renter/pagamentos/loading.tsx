import { Skeleton } from "@/components/ui/skeleton"

export default function PagamentosLoading() {
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-32 rounded-lg" />
            ))}
          </div>

          {/* Payment Methods Skeleton */}
          <Skeleton className="h-64 rounded-lg mb-8" />

          {/* Transaction History Skeleton */}
          <Skeleton className="h-96 rounded-lg" />
        </div>
      </div>
    </div>
  )
}

