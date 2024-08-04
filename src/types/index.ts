import React from "react";

export type TUserInfo = {
  firstName: string;
  lastName: string;
  gender: "male" | "female";
  phone: string;
  job: string;
  address: string;
  amount: number;
  term: number;
};

export type TAppContext = {
  isOpenModal: boolean;
  jobs: string[];
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  userInfo: TUserInfo;
  setIsOpenModal: (value: boolean) => void;
};
