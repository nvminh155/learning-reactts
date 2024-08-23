import React from "react";
import { DefaultButton } from "../buttons";
import { Input, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/reduxs/store";
import { toogleModal } from "@/reduxs/modal/toogleModal";

const ModalHome = () => {
  const isOpen = useSelector((state: RootState) => state.toogleModal.isOpen);
  const dispatch = useDispatch();

  return (
    <Modal
      open={isOpen}
      onOk={() => dispatch(toogleModal())}
      onCancel={() => dispatch(toogleModal())}
      okButtonProps={{ className: "hidden" }}
      cancelButtonProps={{ className: "hidden" }}
    >
      <div className="text-center">
        <div className="text-xl font-bold">Invite Your Friends</div>
        <div className="text-muted-foreground mt-2">
          Let's share the code with your friend and both of you will earn extra
          points and have fun together.
        </div>
      </div>

      <div className="mt-4">
        <div className="space-y-2">
          <label htmlFor="code">Your Code</label>
          <div className="flex items-center space-x-2">
            <Input id="code" value="ABC567" readOnly className="flex-1" />
            <DefaultButton>
              <CopyIcon className="h-4 w-4" />
            </DefaultButton>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6 gap-3">
        <DefaultButton className="text-red-500 border-red-500 w-1/2 border-[1px] rounded-full">
          Cancel
        </DefaultButton>
        <DefaultButton className="bg-[#d9534f] text-white rounded-full w-1/2">
          Done
        </DefaultButton>
      </div>
    </Modal>
  );
};

function CopyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

export default ModalHome;
