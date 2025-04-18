import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="text-white flex flex-col space-y-2">
      <Link href={"/01-Transformations"} className="underline">
        01. Transformations
      </Link>

      <Link href={"/02-Transitions"} className="underline">
        02. Transitions
      </Link>

      <Link href={"/03-Keyframes"} className="underline">
        03. KeyFrames
      </Link>
    </div>
  );
};

export default Page;
