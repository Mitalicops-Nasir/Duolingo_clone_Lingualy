import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { quests } from "@/constants";
import { Progress } from "./ui/progress";

type Props = {
  points: number;
};

export const Quests = ({ points }: Props) => {
  return (
    <div className="border-2 rouned-xl p-4 space-y-4">
      <div className="flex items-center justify-between w-full space-y-2">
        <h3 className="font-bold text-lg">Quests</h3>
        <Link href="quests">
          <Button variant="primaryOutline" size="sm">
            View All
          </Button>
        </Link>
      </div>
      <ul className="w-full">
        {quests.slice(0, 3).map((quest) => {
          const progress = (points / quest.value) * 100;

          return (
            <div className="flex items-center pb-4 gap-x-3 " key={quest.title}>
              <Image src="/points.svg" width={60} height={60} alt="points" />
              <div className="flex flex-col gap-y-2 w-full">
                <p className="text-neutral-700 text-xl font-bold">
                  {quest.title}
                </p>
                <Progress value={progress} className="h-2" />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
