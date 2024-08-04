import { Outlet } from "react-router";
import { Modal } from "./Modal.tsx";

export const Layout = () => {
  return (
    <>
      <Outlet />
      <Modal />
    </>
  );
};
