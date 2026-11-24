const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

export function CartItem({ image, title, subtitle, price, quantity }) {
  return (
    <div className="flex items-center py-6 gap-4">
      {/* Product Info */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="w-16 h-16 md:w-[72px] md:h-[72px] bg-[#8da5a7] rounded-2xl overflow-hidden shrink-0 flex items-center justify-center">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <h3 className="font-bold text-gray-900 text-sm md:text-base leading-snug truncate">{title}</h3>
          <p className="text-xs md:text-sm text-gray-400 mt-0.5 truncate">{subtitle}</p>
        </div>
      </div>

      {/* Quantity Control */}
      <div className="w-[130px] flex justify-center shrink-0">
        <div className="flex items-center justify-between w-[114px] h-9 px-3.5 border border-gray-200/90 rounded-full bg-white">
          <button
            type="button"
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer flex items-center justify-center p-0.5"
            aria-label="Decrease quantity"
          >
            <MinusIcon />
          </button>
          <span className="text-xs md:text-sm font-medium text-gray-800">{quantity}</span>
          <button
            type="button"
         
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer flex items-center justify-center p-0.5"
            aria-label="Increase quantity"
          >
            <PlusIcon />
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="w-[100px] text-center font-bold text-gray-900 text-sm md:text-base shrink-0">
        ${Math.round(price * quantity)}
      </div>

      {/* Action */}
      <div className="w-[60px] flex justify-center shrink-0">
        <button
          type="button"
   
          className="text-gray-400 hover:text-gray-600 transition-colors p-1 cursor-pointer"
          title="Remove item"
          aria-label="Remove item"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}