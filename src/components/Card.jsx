export default function Card( {src, title, desc, price}) {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img
                    className="p-6 h-60 mx-auto rounded-t-lg"
                    src={src}
                    alt="product image"
                />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="mb-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {desc}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ${price}
                    </span>
                    <a
                        href="#"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>

    )
}
