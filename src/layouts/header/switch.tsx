import clsx from "clsx";
import { useState } from "react";

export const Switch = () => {
  const [isMainnet, setIsMainnet] = useState<boolean>(true);

  return (
    <div className="w-48 h-10 bg-[#eec5c7] rounded-full relative flex justify-center items-center">
      <button
        className={clsx({
          "absolute font-medium left-0 w-1/2 rounded-full flex justify-center items-center py-1 ml-1":
            true,
          "bg-[#ca5c3b] text-[#FFFFFF]": isMainnet,
        })}
        onClick={() => setIsMainnet(true)}
      >
        Mainnet
      </button>
      <button
        className={clsx({
          "absolute font-medium right-0 w-1/2 rounded-full flex justify-center items-center py-1 mr-1":
            true,
          "bg-[#ca5c3b] text-[#FFFFFF]": !isMainnet,
        })}
        onClick={() => setIsMainnet(false)}
      >
        Testnet
      </button>
    </div>
  );
};
