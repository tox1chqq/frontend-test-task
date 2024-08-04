import { useAppContext } from "../hooks";
import React, { useState } from "react";
import { addUrl } from "../constants";
import { useNavigate } from "react-router-dom";

export const CreditInfo = () => {
  const navigate = useNavigate();
  const { userInfo, handleChange, setIsOpenModal } = useAppContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!userInfo.firstName) {
    navigate("/");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(addUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: `${userInfo.firstName} ${userInfo.lastName}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка запроса!");
      }

      setIsOpenModal(true);
      localStorage.removeItem("userInfo");
    } catch (e) {
      console.log(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="pt-4 w-1/2 m-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="amount"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Сумма займа ($):
        </label>
        <input
          type="range"
          id="amount"
          name="amount"
          min="200"
          max="1000"
          step="100"
          required
          className="w-full"
          value={userInfo.amount}
          onChange={handleChange}
        />
        <div className="flex justify-between text-gray-700 text-sm">
          <span>$200</span>
          <span id="amountValue" className="font-bold">
            {userInfo.amount}$
          </span>
          <span>$1000</span>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="term"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Срок займа (дни):
        </label>
        <input
          type="range"
          id="term"
          name="term"
          min="10"
          max="30"
          step="1"
          required
          className="w-full"
          value={userInfo.term}
          onChange={handleChange}
        />
        <div className="flex justify-between text-gray-700 text-sm">
          <span>10 дней</span>
          <span id="termValue" className="font-bold">
            {userInfo.term}
          </span>
          <span>30 дней</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Далее
        </button>
      </div>
    </form>
  );
};
