import { CheckCircle2, X } from "lucide-react";

export const Alert = ({ message, onClose }) => {

    return (
        <div
            className={`flex items-center justify-between w-full max-w-md mx-auto p-4  shadow-md bg-red-100 border-red-500 text-red-700 transition-all`}
        >
            <div className="flex items-center gap-3">
                <CheckCircle2 className="text-red-600 w-5 h-5" />
                <p className="font-medium">{message}</p>
            </div>
            <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                <X className="w-5 h-5" />
            </button>
        </div>
    );
};
