import { useNavigate } from "react-router-dom";
import { useAppContext } from "../hooks";

export const PersonalInfo = () => {
  const navigate = useNavigate();
  const { userInfo, handleChange } = useAppContext();

  return (
    <form
      className="pt-4 w-1/2 m-auto"
      onSubmit={() => navigate("/additional")}
    >
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Имя:
        </label>
        <input
          value={userInfo.firstName}
          onChange={handleChange}
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Введите ваше имя"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Фамилия:
        </label>
        <input
          value={userInfo.lastName}
          onChange={handleChange}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Введите вашу фамилию"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="gender"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Пол:
        </label>
        <select
          value={userInfo.gender}
          onChange={handleChange}
          id="gender"
          name="gender"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Телефон:
        </label>
        <input
          value={userInfo.phone}
          onChange={handleChange}
          type="tel"
          id="phone"
          name="phone"
          maxLength={13}
          placeholder="0XXX XXX XXX"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <p className="text-left"></p>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Далее
        </button>
      </div>
    </form>
  );
};
