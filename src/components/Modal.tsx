import { createPortal } from "react-dom";
import { useAppContext } from "../hooks";

export const Modal = () => {
  const { isOpenModal, setIsOpenModal, userInfo } = useAppContext();
  const { lastName, firstName, amount, term } = userInfo;

  if (!isOpenModal) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <p className="text-gray-700 text-lg mb-4">
          Поздравляем, {lastName} {firstName}. Вам одобрена ${amount} на {term}{" "}
          дней.
        </p>
        <button
          onClick={() => setIsOpenModal(false)}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Закрыть
        </button>
      </div>
    </div>,
    document.body,
  );
};
