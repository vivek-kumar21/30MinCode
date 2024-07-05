import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FaqItem = ({ type, question, answer, differences }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium text-slate-900">{question}</p>
        <span className="text-red-500 text-xl">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </div>
      <div
        className={`overflow-hidden pl-6 transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {type === "text" && <p className="mt-2 text-gray-600">{answer}</p>}
        {type === "table" && (
          <table className="mt-2 w-full text-left text-gray-600 border-collapse">
            <thead>
              <tr>
                <th className="p-2 border-b-2 text-slate-700">Feature</th>
                <th className="p-2 border-b-2 text-slate-700">
                  {Object.keys(differences[0])[1]}
                </th>
                <th className="p-2 border-b-2 text-slate-700">
                  {Object.keys(differences[0])[2]}
                </th>
              </tr>
            </thead>
            <tbody>
              {differences.map((diff, index) => (
                <tr key={index}>
                  <td className="p-2 border-b">{diff.feature}</td>
                  <td className="p-2 border-b">{diff[Object.keys(diff)[1]]}</td>
                  <td className="p-2 border-b">{diff[Object.keys(diff)[2]]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};


export default FaqItem;
