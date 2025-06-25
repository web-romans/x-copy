import { PageTitle } from "@/components/PageTitle";
import { API_URL } from "@/constants";

export default async function ShopSSGPage() {
    const products = await fetch(API_URL);
    return (
        <div>
            <PageTitle title="Shop SSG" />
        </div>
    )
}
