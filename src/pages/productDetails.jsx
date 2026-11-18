import { Header } from "../components/header";
import { ProductInfo } from "../components/product/productInfo";


export function ProductDetails({ product }) {

    return (
        <>
            <Header />
            <main className=" max-w-area mx-auto">
                <ProductInfo product={product} />
            </main>
        </>
    )
}