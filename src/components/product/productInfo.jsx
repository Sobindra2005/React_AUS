import { Heart, Leaf, RefreshCw, ShoppingBag, Star, Truck } from "lucide-react"
import { sortVariant } from "../../lib/utility";
import { Benefit } from "../home/hero";
import { useState } from "react";

export function ProductInfo({ product }) {
    const [selectedSize, setSelectedSize] = useState('L');
    const [activeProduct, setActiveProduct] = useState(product.images[0]);

    const currentPrice = product.basePrice - ((product.discountPercentage / 100) * product.basePrice);
    const productVariants = product.variants.map((variant) => variant.attributes.Size)
    const variantList = sortVariant(productVariants)

    function selectVariant(size) {

        setSelectedSize(size)
    }

    function selectProduct(product) {
        setActiveProduct(product)
    }

    return (
        <div className="grid grid-cols-2  gap-14 mt-10">
            {/* left side */}
            <div className="flex gap-4">
                <div className="w-20 ">
                    {
                        product.images.map((product) => {
                            return (
                                < button onClick={() => selectProduct(product)} key={product._id} className={`w-19 h-24 rounded-md ${activeProduct._id === product._id && 'border-2 border-black'}`}>
                                    <img className="w-full h-full rounded-md overflow-hidden object-cover object-center"
                                        src={product.url}
                                        alt={product.altText}
                                    />
                                </button>
                            )
                        })
                    }
                </div>

                <div className="w-135.5">
                    <img className="w-full h-162.5 rounded-xl overflow-hidden object-cover object-center" src={activeProduct.url} alt={activeProduct.altText} />
                </div>
            </div>

            {/* right side */}
            <div className="w-full">
                <div className="mt-2">
                    <span className=" px-4 py-2 bg-tags rounded-md uppercase text-caption">
                        {product.brand}
                    </span>
                </div>
                <h1 className="text-heading font-bold tracking-tight mt-5">
                    {product.name}
                </h1>
                <div className="flex flex-col gap-5 mt-2">
                    <div className="flex gap-1 ">
                        {
                            [1, 2, 3, 4, 5].map((value) => {
                                const isFill = value <= product.averageRating
                                return (
                                    isFill ? < Star key={value} fill="black" size={17} /> : < Star key={value} size={17} />
                                )
                            })
                        }

                        <span className="ml-2 text-caption text-body-color font-semibold">{product.averageRating} ({product.numberOfReviews} reviews)</span>
                    </div>

                    <div className="">
                        <span className=" text-[34px] font-bold tracking-normal  ">
                            ${currentPrice.toFixed(2)}
                        </span>

                        {
                            product.discountPercentage > 0 && (
                                <>
                                    <span className="text-body-color ml-5 line-through">
                                        ${product.basePrice.toFixed(2)}
                                    </span>
                                    <span className="ml-2 text-white bg-black px-3 py-1 rounded-md font-bold text-caption">
                                        {product.discountPercentage}% OFF
                                    </span>
                                </>
                            )
                        }
                    </div>

                    <p className="text-body text-body-color max-w-lg ">
                        {product.description}
                    </p>

                    <div>
                        <span className="font-bold text-body">Size:</span> <span>{selectedSize}</span>
                        <div className="flex gap-3 mt-2">
                            {
                                variantList.map((variant, index) => {
                                    return (
                                        <button onClick={() => selectVariant(variant)} key={index} className={`p-3 border  w-18 rounded-md border-gray-300  font-bold ${selectedSize == variant ? 'text-white bg-black' : 'text-body bg-transparent'} `}>
                                            {variant}
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="flex gap-2 max-w-lg">
                        <button className="flex w-full border border-gray-300 rounded-xl justify-center items-center gap-2 font-bold text-white bg-black text-body"><ShoppingBag /> Add to Cart</button>
                        <button className="w-fit border p-4 rounded-xl border-gray-300"><Heart /></button>
                    </div>

                    <div className="flex justify-between max-w-lg border-t border-gray-300 pt-5">
                        <Benefit
                            icon={<Truck size={17} />}
                            title="Free Shipping"
                            description="On orders over $100"
                        />
                        <Benefit
                            icon={<Leaf size={17} />}
                            title="Premium Quality"
                            description="Crafted to last"
                        />
                        <Benefit
                            icon={<RefreshCw size={17} />}
                            title="Easy Returns"
                            description="Hassle free"
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}