import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { getWeeklyPosts, PostsByMonth } from "@/lib/getWeeklyPosts";
import Link from "next/link";

export default async function TimeLine() {
  const { postsByMonth }: { postsByMonth: PostsByMonth } =
    await getWeeklyPosts();

  return (
    <ScrollArea className="h-72 w-32 rounded-md border border-gray-600">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">时间线</h4>
        {Object.keys(postsByMonth).map((month, index) => (
          <>
            <Link key={index} href={`#${month}`}>
              {month}
            </Link>
            <Separator className="my-2 bg-gray-600" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
}
