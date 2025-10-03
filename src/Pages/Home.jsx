import IconArrowRight from "../Components/Icons/ArrowRight";

import PizzaImage from '../assets/Images/pizza2.png';
import CookingImage from '../assets/Images/cooking1.png';
import IconPatchCheck from "../Components/Icons/IconPatchCheck";
import OrderFood from '../assets/Images/orderFood.png';
import Pickup from '../assets/Images/pickup.png';
import Enjoy from '../assets/Images/enjoy.png';
import Layout from "../Layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllProducts } from "../Redux/Slices/ProductSlice";
import { Link } from "react-router-dom";
function Home() { 
    const dispatch = useDispatch();

    const { productsData } = useSelector((state) => state.product);

    useEffect(() => {
        // This will be called when the component mounts
        dispatch(getAllProducts());
    }, []);

    // Add this state and effect for toggling header
    const phrases = [
        "Satisfy Your Cravings,",
        "One Slice at a Time! 🍕"
    ];
    const [currentPhrase, setCurrentPhrase] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }, 2000); // Change phrase every 2 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <Layout>
        <div>
            {/* Hero section */}
            <section
                className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300
                "
            >
                <div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">

                    <div className="flex flex-col items-center md:items-start text-4xl md:text-5xl font-extrabold pb-5 min-h-[60px]">
                        <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg transition-opacity duration-700"
                              key={currentPhrase}>
                            {phrases[currentPhrase]}
                        </span>
                    </div>


                    <p className="pb-4 text-[#6B7280]">
                        The Pizza App lets you order your favorite pizza from the comfort of your home. 
                        Enjoy the best pizza in town with just a few clicks.
                    </p>

                    <button
                        className="flex items-center px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 group"
                        onClick={() => {
                            const productsSection = document.getElementById('products');
                            if (productsSection) {
                                productsSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Order Now 
                        <span className="inline-block ml-3 transition-transform ease-in-out group-hover:translate-x-2">
                            <IconArrowRight />
                        </span>
                    </button>
                </div>

                <div>
                    <img
                        src={PizzaImage}
                        alt="Pizza"
                        width={550}
                        height={550}
                    />
                </div>


            </section>

            {/* Services section */}
            <section
                id="services"
                className="py-4 mt-6 bg-gradient-to-r from-amber-50 to-orange-300"
            >
                <div className="container flex flex-col md:flex-row">
                    <div className="flex flex-col items-center justify-center rounded-lg lg:w-1/2">
                        <img
                            src={CookingImage}
                            width={500}
                            className="rounded-lg"
                            alt="Cooking"
                        />
                    </div>
                    <div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">

                        <div className="flex flex-col items-center lg:items-start">
                            <div>
                                <h2 className="mb-2 text-5xl font-extrabold text-transparent title-font bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">
                                    Cooked by the best <br/> chefs in the world
                                </h2>
                                <p className="text-base leading-relaxed text-[#6B7280]">
                                    There are many benefits regarding to that but the main ones are:
                                </p>
                            </div>
                        </div>

                        <div className="w-full p-1">
                            <div className="flex items-center h-full p-2 text-2xl rounded">
                                <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                                <span className="font-bold title-font">Perfect taste</span>
                            </div>
                        </div>
                        <div className="w-full p-1">
                            <div className="flex items-center h-full p-2 text-2xl rounded">
                                <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                                <span className="font-bold title-font">Prepared quickly</span>
                            </div>
                        </div>
                        <div className="w-full p-1">
                            <div className="flex items-center h-full p-2 text-2xl rounded">
                                <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                                <span className="font-bold title-font">Food hygeine guaranteed</span>
                            </div>
                        </div>

                        <div className="px-5 py-4 mx-auto">

                            <div className="flex justify-center py-4">

                                <div className="inline-flex w-16 h-1 bg-yellow-500 rounded-full"></div>

                            </div>

                            <div className="flex flex-wrap space-y-6 md:space-y-0">

                                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                        <img src={OrderFood} />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                                            Order Food
                                        </h2>
                                        <p className="text-base leading-relaxed">
                                            As easy as 1, 2, 3. Just select your favorite pizza and place your order.
                                        </p>
                                    </div>

                                </div>
                                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                        <img src={Pickup} />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                                            Pickup Food
                                        </h2>
                                        <p className="text-base leading-relaxed">
                                            Pick up your order from the nearest store or get it delivered to your doorstep.
                                        </p>
                                    </div>

                                </div>
                                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                        <img src={Enjoy} />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                                            Enjoy Food
                                        </h2>
                                        <p className="text-base leading-relaxed">
                                            As soon as you get your order, enjoy the delicious pizza with your loved ones.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>
                        
                    </div>

                </div>

            </section>

            <div id="products" className="mx-auto">
                <div className="flex flex-wrap justify-center">
                    {productsData.map((item) => {
                        return (
                            item.inStock && (
                                <div className="p-4 md:w-1/3" key={item._id}>
                                    <Link to={`/product/${item._id}`}>
                                        <div className="overflow-hidden border rounded-lg border-opacity-60">
                                            <img 
                                                src={item.productImage}
                                                alt="Pizza Image"
                                                className="object-cover object-center w-full lg:h-48 md:h-36"
                                            />
                                            <div className="p-6 border">
                                                <h2 className="text-xs font-medium tracking-widest text-gray-400 title-font">
                                                    {item.category}
                                                </h2>
                                                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                                                    {item.productName}
                                                </h1>
                                                <p className="mb-4 text-base leading-relaxed">
                                                    {item.description}
                                                </p>
                                                <p className="text-lg font-medium text-gray-900 title-font">
                                                    ${item.price}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        )
                    })}
                </div>
            </div>

            {/* About Us section at the end with better styling */}
            <section
                id="about"
                className="py-16 bg-gradient-to-r from-orange-100 to-yellow-50 border-t border-orange-200"
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-6 text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text drop-shadow-lg">
                        About Us
                    </h2>
                    <div className="max-w-2xl mx-auto">
                        <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                            Welcome to <span className="font-bold text-orange-500">Pizza App</span>! We are passionate about delivering the best pizza experience right to your doorstep.
                        </p>
                        <p className="text-base md:text-lg text-gray-600 mb-4">
                            Our pizzas are made with the freshest ingredients and crafted by world-class chefs. Whether you’re craving a classic Margherita or something more adventurous, we’ve got you covered.
                        </p>
                        <p className="text-base md:text-lg text-gray-600 mb-4">
                            Enjoy fast delivery, great taste, and a slice of happiness every time you order. Your satisfaction is our top priority!
                        </p>
                        <div className="flex justify-center gap-6 mt-8">
                            <img src={OrderFood} alt="Order Food" className="w-16 h-16 rounded-full shadow-lg border-2 border-yellow-400 bg-white" />
                            <img src={CookingImage} alt="Chef" className="w-16 h-16 rounded-full shadow-lg border-2 border-orange-300 bg-white" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-10">
  <iframe
    title="Delivery Location"
    width="350"
    height="250"
    style={{ border: 0, borderRadius: '12px' }}
    loading="lazy"
    allowFullScreen
    src="https://www.openstreetmap.org/export/embed.html?bbox=77.5946%2C12.9716%2C77.5946%2C12.9716&amp;layer=mapnik&amp;marker=12.9716%2C77.5946"
  ></iframe>
</div>
<p className="mt-4 text-sm text-gray-500">
  Track your delivery location on the map above!
</p>

{/* Chatbot Widget */}
<div className="flex justify-center mt-10">
  <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 border border-yellow-200">
    <div className="flex items-center mb-4">
      <span className="inline-block w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white text-2xl mr-3">🤖</span>
      <span className="font-bold text-lg text-gray-800">PizzaBot</span>
    </div>
    <div className="bg-yellow-50 rounded-lg p-4 text-gray-700 mb-3">
      Hi! 👋 I'm PizzaBot. How can I help you today?
    </div>
    <input
      type="text"
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
      placeholder="Type your message..."
      disabled
    />
    <p className="text-xs text-gray-400 mt-2">*Chatbot demo UI only</p>
  </div>
</div>
            </section>

        </div>
        </Layout>
    );
}

export default Home;