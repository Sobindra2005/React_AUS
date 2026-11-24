import { useState } from "react";
import { OrderSummary } from "../components/cart/orderSummary";
import { CartItem } from "../components/cart/cartItem";

const initialItems = [
    {
        id: 1,
        title: 'Furniture Set',
        subtitle: 'Set : Colour: Coffee',
        price: 109.25,
        quantity: 4,
        image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 2,
        title: 'Vintage Dining Set',
        subtitle: 'Set : Colour: Brown',
        price: 472.5,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1617325247661-675ab034a77d?auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 3,
        title: 'Studio Chair',
        subtitle: 'Set : Colour: Deep Green',
        price: 85.285,
        quantity: 7,
        image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=300&q=80'
    }
];

export function Cart() {
    const [items, setItems] = useState(initialItems);

    // Calculations
    const subTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountPercent = 10;
    const discountAmount = subTotal * (discountPercent / 100);
    const deliveryFee = items.length > 0 ? 50.00 : 0;

    // Format numbers to roughly match the screenshot's style
    const formattedSubTotal = Math.round(subTotal);
    const formattedDiscountAmount = Math.round(discountAmount);
    const total = Math.round(subTotal - discountAmount + deliveryFee);

    return (
        <div className="min-h-screen bg-white text-gray-900 p-6 md:p-10 lg:p-14">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-gray-900 tracking-tight">Shopping Cart</h1>

                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column - Cart Items */}
                    <div className="flex-1 w-full border border-gray-100 rounded-3xl bg-white p-6 md:p-8">

                        {/* Header Row (Desktop only) */}
                        <div className="hidden md:flex items-center text-sm font-semibold text-gray-800 pb-5">
                            <div className="flex-1">Product Code</div>
                            <div className="w-[130px] text-center">Quantity</div>
                            <div className="w-[100px] text-center">Total</div>
                            <div className="w-[60px] text-center">Action</div>
                        </div>

                        {/* Items List */}
                        <div className="divide-y divide-gray-100">
                            {items.length > 0 ? (
                                items.map(item => (
                                    <CartItem
                                        key={item.id}
                                        {...item}
                                    />
                                ))
                            ) : (
                                <div className="py-12 text-center text-gray-400">
                                    Your cart is empty.
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="w-full lg:w-[380px] shrink-0 sticky top-8">
                        <OrderSummary
                            subTotal={formattedSubTotal}
                            discountPercent={discountPercent}
                            discountAmount={formattedDiscountAmount}
                            deliveryFee={deliveryFee}
                            total={total}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}