import Link from "next/link";
import React from "react";

const links = ["Transformations", "Transitions", "Keyframes", "Variants", "Gestures"];

const Page = () => {
  return (
    <div className="text-white flex flex-col space-y-2">
      {links.map((link, i) => {
        const index = i + 1;
        const displayIndex = index < 10 ? `0${index}` : index;

        return (
          <Link
            key={displayIndex}
            href={`/${displayIndex}-${link}`}
            className="underline hover:no-underline"
          >
            {displayIndex}. {link}
          </Link>
        );
      })}
    </div>
  );
};

export default Page;
