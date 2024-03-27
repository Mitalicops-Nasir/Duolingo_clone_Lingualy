import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeft, InfinityIcon } from "lucide-react";
import Image from "next/image";
import { courses } from "@/db/schema";

type Props = {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            width={32}
            className="rounded-md border"
            height={32}
          />
        </Button>
      </Link>
      <Link href="/points">
        <Button variant="ghost" className="text-orange-500">
          <Image
            src="/points.svg"
            alt="points"
            width={28}
            className="mr-2"
            height={28}
          />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image
            src="/heart.svg"
            alt="Hearts"
            width={22}
            className="mr-2"
            height={22}
          />

          {hasActiveSubscription ? (
            <InfinityIcon className="h-4 w-4 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};
