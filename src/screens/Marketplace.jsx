import productData from '../constant/productData';
import Card from "../components/Card";

export default function Marketplace() {

    const data = productData.values

    return (
        <div>
            <img
                className="w-full min-h-max object-cover mb-4"
                src="https://img.freepik.com/free-vector/flat-design-shopping-center-twitch-banner_23-2149337409.jpg?w=740&t=st=1726503580~exp=1726504180~hmac=0eb84b502551f973ae53384dfe5dae65a070df6322eb861c5cbaf67a200ecf85"
                alt="Banner" />
            <div className="flex flex-wrap gap-5 justify-evenly py-6 mb-32">
                {data.map((item, index) => (
                    <Card
                        key={index}
                        src={item[3]}
                        title={item[1]}
                        desc={item[2]}
                        price={item[4]}
                    />
                ))}
            </div>
        </div>
    )
}