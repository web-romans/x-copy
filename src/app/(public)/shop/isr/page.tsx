import { PageTitle } from "@/components/PageTitle";
import { ProductCard, type IProduct } from "@/components/ProductCard";
import { API_URL } from "@/constants";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ISR Page",
};

export default async function ShopSSRPage() {
    const response = await fetch(API_URL, {
        next: { revalidate: 300 },
    });
    const products = (await response.json()) as IProduct[];
    return (
        <div>
            <PageTitle title="Shop ISR" />
            <div className="grid grid-cols-2 gap-2">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>

        </div>
    )
}
