import { DefaultButton } from "@/components/buttons";

import len from "@/assets/imgs/len.png";
import taymeo from "@/assets/imgs/taymeo.png";
import xuongca from "@/assets/imgs/xuongca.png";
import heart from "@/assets/imgs/heart.png";
import X from "@/assets/imgs/X.png";

const Card = () => {
  return (
    <div className="relative w-[320px] bg-white px-[30px] py-[18px] flex flex-col gap-3 rounded-[30px] border-[#EEC5C7] border-[2]">
      <img src={taymeo} alt="image3" className="absolute right-0 top-0" />
      <img
        src={len}
        alt="image1"
        className="absolute right-[60px] top-[15px]"
      />
      <img
        src={xuongca}
        alt="image2"
        className="absolute right-[5px] top-[65px]"
      />

      <div className="card__header">
        <div className="bg-black w-[60px] h-[60px] rounded-full relative flex items-center justify-center">
          <img src={X} alt="x" />
        </div>
      </div>
      <div className="card__body mt-[41px]">
        <div className="title text-xl font-semibold">Follow Tapos X</div>
        <div className="sub_title">Follow Tapos X to earn Points</div>
      </div>

      <div className="card__footer flex gap-4 items-center flex-1 rounded-[30px]">
        <DefaultButton className="bg-[#F5EEEC] py-[10px] px-[16px] flex items-center gap-[4px] rounded-[24px] w-1/2">
          <span>+20</span>
          <img src={heart} alt="heart" className="" />
        </DefaultButton>
        <DefaultButton className="text-[#CDD5DF] border-[#CDD5DF] border-[2px] py-[10px] px-[16px] rounded-[24px] w-1/2 font-semibold">
          Follow
        </DefaultButton>
      </div>
    </div>
  );
};

export default Card;
