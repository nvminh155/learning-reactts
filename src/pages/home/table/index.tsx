import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { TableProps } from "antd";
import AppPagination from "./pagination";
import { User } from "@/types/user";

type DataType = {
  key: string;
} & User;

const columns: TableProps<DataType>["columns"] = [
  {
    title: "",
    dataIndex: "id",
    key: "#",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
];

const UserTable: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const currentPageSize = 5;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      const dt = (users as DataType[])
        .map((user) => ({
          ...user,
          key: user.id.toString(),
        }))
        .slice(
          (currentPage - 1) * currentPageSize,
          (currentPage - 1) * currentPageSize + currentPageSize
        );
      setData(dt);
      setTotal(users.length);
    }
    fetchData();
  }, [currentPage]);

  return (
    <div className="flex flex-col gap-3 w-full mt-12 bg-white">
      <Table columns={columns} dataSource={data} pagination={false} />
      <AppPagination
        total={total}
        defaultCurrent={currentPage}
        defaultPageSize={currentPageSize}
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
      />
    </div>
  );
};

export default UserTable;
