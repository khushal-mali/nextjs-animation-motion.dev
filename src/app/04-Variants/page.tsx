// "use client";

import ClientVariants from "./ClientVariants";
import ServerVariants from "./ServerVariants";

const Variants = () => {
  return (
    <div className="flex flex-col gap-20 items-center">
      <ClientVariants />
      <ServerVariants />
    </div>
  );
};

export default Variants;
