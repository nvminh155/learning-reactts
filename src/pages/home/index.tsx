import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { DefaultButton } from "@/components/buttons";
import { useState } from "react";
import Card from "./card";
import UserTable from "./table";
import InviteFriends from "./inviteFriends";

const Home = () => {
  const [isClickConnect, setIsClickConnect] = useState<boolean>(false);

  return (
    <div className="bg-[#FBF8F7] w-full flex justify-center items-center flex-col mt-14">
      <div className="text-5xl font-bold py-5">Social Tasks</div>
      <div className="py-3 text-[#6B6B6B] font-medium">
        Complete the Social Tasks to earn extra $Heart token
      </div>
      <div className="w-3/4 h-48 bg-[#FFFFFF] border-2 border-[#EEC5C7] rounded-xl">
        <div className="pl-5 bg-[#FFFFFF] rounded-xl">
          <div className="text-2xl py-5">Connect Your X account</div>
          <div className="text-[#5A5A5A] font-medium">
            You need connect your X account to join Social Task
          </div>
          <div>
            <Link to="/#" className="text-[#0D88D8] hover:underline">
              Learn more <RightOutlined />
            </Link>
          </div>
          <div className="pt-3">
            <DefaultButton
              loading={isClickConnect}
              className="bg-[#CA5C3B] text-[#FFFFFF] rounded-full px-7 py-3 font-medium hover:bg-[#a0492f] cursor-pointer"
              onClick={() => setIsClickConnect(true)}
            >
              Connect your X account
            </DefaultButton>
          </div>
        </div>
      </div>

      <InviteFriends />
      
      <div className="flex gap-6 mt-24">
        <Card />
        <Card />
        <Card />
      </div>
      <UserTable />
    </div>
  );
};

export default Home;
