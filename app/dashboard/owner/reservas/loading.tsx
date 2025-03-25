import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="fixed inset-y-0 left-0 z-40 w-64 bg-white border-r hidden md:block">
        <Skeleton className="h-full w-full" />
      </div>

      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-6xl mx-auto">
          <Skeleton className="h-10 w-64 mb-2" />
          <Skeleton className="h-5 w-96 mb-8" />

          <Skeleton className="h-10 w-full max-w-md mb-6" />

          <div className="space-y-4">
            <Skeleton className="h-40 w-full rounded-lg" />
            <Skeleton className="h-40 w-full rounded-lg" />
            <Skeleton className="h-40 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

