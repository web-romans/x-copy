import Image from "next/image";

export interface IProduct {
    id: number,
    title: string,
    image: string,
    price: number
}

export function ProductCard({ title, image, price }: IProduct) {
    return (
        <div className="w-64 border border-black/10 dark:border-white/10 rounded-xl p-4 hover:shadow transition-shadow">
            <div className="w-full bg-white h-30 mb-3 rounded flex items-center justify-center">
                <Image
                    src={image}
                    width={100}
                    height={40}
                    alt={title}
                    className="object-contain object-center-center max-h-[90%] max-w-[90%]"
                />
            </div>

            <h2 className="text-sm text-black dark:text-white font-medium line-clamp-2 mb-1">
                {title}
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400">${price}</p>
        </div>
    )
}
