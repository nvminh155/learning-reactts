import { DefaultButton } from "@/components/buttons";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { toogleModal } from "@/reduxs/modal/toogleModal";

const InviteFriends = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full bg-white mx-auto flex justify-between items-end p-6 rounded-md border-[#EEC5C7] border-[0.5px]">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-2xl">Enter Refernal Code</h2>
        <div>
          <div>Please enter refernal code to earn extra points</div>
          <button className="text-[#0D88D8]">Learn more {">"}</button>
        </div>
        <Input
          placeholder="Enter referral code"
          suffix={
            <DefaultButton className="rounded-2xl text-white bg-[#09AE7D] !px-8">
              Go
            </DefaultButton>
          }
          className="rounded-2xl"
        />
      </div>

      <DefaultButton
        className="bg-[#CA5C3B] text-[#FFFFFF] rounded-full py-3 font-medium hover:bg-[#a0492f]"
        onClick={() => {
          dispatch(toogleModal());
        }}
      >
        Invite Your Friends
      </DefaultButton>
    </div>
  );
};

export default InviteFriends;
