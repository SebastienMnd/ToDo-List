import { Plus } from "lucide-react";

export const AddInput = ({ value, onChange, onClick }) => {
  return (
    <div className="flex bg-gray-100 rounded-full">
      <input
        className="flex-grow bg-transparent px-4 py-2 rounded-full outline-none "
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ajoutez votre tâche"
      />
      <button
        className="bg-green-500 p-2 rounded-full"
        onClick={() => {
          onClick();
          onChange("");
        }}
      >
        <Plus />
      </button>
    </div>
  );
};
