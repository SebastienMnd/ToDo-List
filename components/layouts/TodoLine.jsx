import { Pencil, Trash2 } from "lucide-react";

export const TodoLine = ({
  id,
  checked = false,
  validate,
  remove,
  children,
}) => {
  return (
    <div className="bg-gray-100 rounded-xl flex">
      <p className={`${checked && "line-through"} flex-grow px-4 p-2`}>
        {children}
      </p>
      <button className="p-2 group" onClick={() => validate(id)}>
        <Pencil className="group-hover:text-blue-500 transition" />
      </button>
      <button className="p-2 group" onClick={() => remove(id)}>
        <Trash2 className="group-hover:text-red-500 transition" />
      </button>
    </div>
  );
};
