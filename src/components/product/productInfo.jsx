export function ProductInfo({ product }) {
    const activeProduct = product.images[0]
    return (
        <div className="grid grid-cols-2  gap-14">
            {/* left side */}
            <div className="flex gap-4">
                <div className="w-20 ">
                    {
                        product.images.map((product) => {
                            return (
                                < button key={product._id} className="w-19 h-24 rounded-md">
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
            <div className="w-full border">Right side</div>
        </div >
    )
}