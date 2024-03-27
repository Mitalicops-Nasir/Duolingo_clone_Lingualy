import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2 ">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/hr.svg"
            width={40}
            height={32}
            alt="croatian"
            className="mr-4 rounded-md"
          />
          Croatian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/es.svg"
            width={40}
            height={32}
            alt="spanish"
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/fr.svg"
            width={40}
            height={32}
            alt="french"
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/jp.svg" width={40} height={32} alt="Japanese" className="mr-4 rounded-md"/>
          Japanese
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/it.svg" width={40} height={32} alt="italian" className="mr-4 rounded-md"/>
          Italian
        </Button>
      </div>
    </footer>
  );
};
