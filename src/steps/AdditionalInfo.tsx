import { useNavigate } from "react-router-dom";
import { useAppContext } from "../hooks";

export const AdditionalInfo = () => {
  const navigate = useNavigate();
  const { userInfo, handleChange, jobs } = useAppContext();

  return (
    <form className="pt-4 w-1/2 m-auto" onSubmit={() => navigate("/credit")}>
      <div className="mb-4">
        <label
          htmlFor="job"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Место работы:
        </label>
        <select
          value={userInfo.job}
          onChange={handleChange}
          id="job"
          name="job"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          {jobs.map((job) => (
            <option key={job} value={job}>
              {job}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Адрес проживания:
        </label>
        <input
          value={userInfo.address}
          onChange={handleChange}
          type="text"
          id="address"
          name="address"
          placeholder="Введите ваш адрес"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          type="button"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Назад
        </button>
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
