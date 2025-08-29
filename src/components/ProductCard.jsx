import React from "react";

// Accepts price prop for e-commerce
// Remove viewers, add price
// If using TypeScript, define prop types accordingly
const ProductCard = ({ thumbnail, title, description, price }) => {
  return (
    <div className="bg-white border-2 rounded-lg shadow-lg p-4 max-w-md">
      <div className="flex items-center gap-4">
        {/* Thumbnail */}
        <div className="relative flex-shrink-0">
          <img
            src={thumbnail}
            className="w-full h-44 max-w-md object-cover rounded-lg"
            alt={title}
          />
        </div>

        {/* Content */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
            <input type="checkbox" />
          </div>

          <p className="text-gray-600 text-sm mt-1 leading-relaxed">
            {description}
          </p>

          {/* Price */}
          <div className="flex items-center mt-2 mb-3">
            <span className="text-green-600 font-bold text-base">{price}</span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-between gap-1 mt-2.5">
        <div>
          <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-md text-xs font-medium">
            View
          </button>
        </div>

        <div className="inline-flex gap-4">
          <button className="px-4 py-2 bg-red-600 text-white rounded-md text-xs font-medium">
            End Stream
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-xs font-medium">
            Suspend
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;