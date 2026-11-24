const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <polyline points="9 12 11 14 15 10"></polyline>
  </svg>
);

export function OrderSummary({ subTotal, discountPercent, discountAmount, deliveryFee, total }) {
  return (
    <div className="border border-gray-100 rounded-3xl p-6 md:p-8 bg-white flex flex-col">
      <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

      <div className="flex gap-2.5 mb-7">
        <input
          type="text"
          placeholder="Discount voucher"
          className="flex-1 border border-gray-200/90 rounded-full px-5 py-2.5 text-xs text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition-colors bg-white"
        />
        <button
          type="button"
          className="border border-gray-200/90 rounded-full px-5 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer bg-white"
        >
          Apply
        </button>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center text-xs md:text-sm">
          <span className="text-gray-500 font-normal">Sub Total</span>
          <span className="font-semibold text-gray-900">{subTotal.toLocaleString()} USD</span>
        </div>
        <div className="flex justify-between items-center text-xs md:text-sm">
          <span className="text-gray-500 font-normal">Discount ({discountPercent}%)</span>
          <span className="font-semibold text-gray-900">-{discountAmount.toLocaleString()}USD</span>
        </div>
        <div className="flex justify-between items-center text-xs md:text-sm">
          <span className="text-gray-500 font-normal">Delivery fee</span>
          <span className="font-semibold text-gray-900">{deliveryFee.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD</span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-7 pt-1">
        <span className="text-sm md:text-base font-semibold text-gray-900">Total</span>
        <span className="text-lg md:text-xl font-bold text-gray-900">${total} USD</span>
      </div>

      <div className="flex items-center gap-2.5 bg-[#f8f9fa] px-3.5 py-3 rounded-2xl mb-6 text-[11px] leading-tight text-gray-400">
        <div className="shrink-0 text-gray-400">
          <ShieldIcon />
        </div>
        <p>
          90 Day Limited Warranty against manufacturer's defects{" "}
          <a href="#" className="font-semibold text-gray-700 hover:text-gray-900 transition-colors">
            Details
          </a>
        </p>
      </div>

      <button
        type="button"
        className="w-full bg-[#18181b] hover:bg-black text-white rounded-full py-4 text-sm font-semibold transition-colors cursor-pointer text-center"
      >
        Checkout Now
      </button>
    </div>
  );
}