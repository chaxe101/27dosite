import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function RenterAvaliacoesLoading() {
  return (
    <div className="container mx-auto py-6">
      <Skeleton className="h-10 w-48 mb-6" />

      <div className="mb-4">
        <Skeleton className="h-10 w-64" />
      </div>

      <div className="grid grid-cols-1 gap-6">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <Skeleton className="w-[100px] h-[60px] rounded-md" />
                    <div>
                      <Skeleton className="h-5 w-40 mb-2" />
                    </div>
                    <div>
                      <Skeleton className="h-5 w-40 mb-2" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                  </div>
                  <Skeleton className="h-4 w-24" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1 mb-2">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <Skeleton key={i} className="h-4 w-4 rounded-full" />
                    ))}
                  <Skeleton className="h-4 w-12 ml-2" />
                </div>
                <Skeleton className="h-16 w-full" />
                <div className="flex justify-end mt-4">
                  <Skeleton className="h-9 w-20" />
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  )
}

