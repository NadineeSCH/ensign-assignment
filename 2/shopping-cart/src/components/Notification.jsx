import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function Notification({ message = "Added to cart", visible }) {
  if (!visible) return null;

  return (
    <div className="fixed mt-6 right-6 z-50 flex items-start space-x-3 rounded-lg bg-white px-4 py-3 shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity duration-300">
      <CheckCircleIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
      <span className="text-sm font-medium text-gray-900">{message}</span>
    </div>
  );
}


