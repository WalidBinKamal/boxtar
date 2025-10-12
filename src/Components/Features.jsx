import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

const Features = () => {
    const group1t = "https://i.ibb.co.com/JR4TXjWd/group-1-t.png"
    const group1 = "https://i.ibb.co.com/qFBJB5Gy/group-1.png"
    const img1 = "https://i.ibb.co.com/tpB8wYKV/solo-2.png"
    const img2 = "https://i.ibb.co.com/rRQ0VhFt/solo-3.png"
    const img3 = "https://i.ibb.co.com/QFKdRc93/solo-4.png"

    const images = [group1, img1, img2, img3];
    return (
        <section id="features" className="scroll-mt-24">
            <div className='bg-[#e9dfd3] md:rounded-none rounded-b-2xl'>
                <h1 className='text-2xl font-semibold p-6'>Features</h1>
                <div className='md:flex justify-between items-center md:gap-4 md:pb-6'>
                    <div className="md:w-1/2 flex flex-col items-center">
                        <>
                            <button
                                onClick={() => document.getElementById('popup').showModal()}
                                type="button"
                                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105"
                            >
                                <img
                                    src={group1t}
                                    alt="Group image"
                                    className="w-full max-w-xs rounded-2xl object-cover transition duration-300 group-hover:opacity-90"
                                />
                            </button>

                            <dialog id="popup" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box overflow-y-auto md:max-h-[80vh] max-h-[70vh]">
                                    <form method="dialog">
                                        <Swiper
                                            modules={[Autoplay]}
                                            spaceBetween={20}
                                            slidesPerView={1}
                                            navigation
                                            autoplay={{ delay: 3500 }}
                                            loop={true}
                                            breakpoints={{
                                                768: {
                                                    slidesPerView: 1,
                                                },
                                            }}
                                        >
                                            {images.map((img, index) => (
                                                <SwiperSlide key={index}>
                                                    <img
                                                        src={img}
                                                        alt={`Slide ${index + 1}`}
                                                        className="w-full h-auto rounded-2xl object-cover"
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                        <div>
                                            <div className='mt-4'>
                                                <div className="flex justify-between md:gap-0 gap-3">
                                                    <div className="md:w-3/4 md:space-y-3 w-1/2 space-y-2">
                                                        <h2 className='text-xl'>Boxer Brief (3pcs Combo)</h2>
                                                        <div className="flex items-center space-x-3 relative">
                                                            <p>Price: </p>
                                                            <span className="line-through">৳600</span>
                                                            <span className="text-red-600 text-xs font-medium py-1 rounded-lg absolute left-16 -top-4 ">
                                                                17% OFF
                                                            </span>
                                                            <span className=" font-semibold pl-6">৳499</span>
                                                        </div>
                                                    </div>
                                                    <div className='pb-2 md:w-2/4 w-1/2'>
                                                        <div className="font-medium">
                                                            <span>Available Colors:</span>
                                                            <ul className="list-disc list-inside ml-6 text-gray-700">
                                                                <li>Black</li>
                                                                <li>Light Grey</li>
                                                                <li>Navy Blue</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="border-b mt-2 mb-2"></div>
                                                <div className="bg-white  rounded-2xl shadow-sm mt-6">
                                                    <h2 className="text-xl font-semibold mb-3 text-gray-800">Description</h2>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed">
                                                        <li>95% Cotton and 5% Spandex Fabric</li>
                                                        <li>Premium Branded Soft Waistband</li>
                                                        <li>Soft and More Comfortable</li>
                                                        <li>Breathable and Stretchy</li>
                                                        <li>Perfect Fitting</li>
                                                        <li>Antibacterial (No Irritation)</li>
                                                        <li>Export Quality Sewing</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn w-full mt-4">Close</button>
                                    </form>
                                </div>
                            </dialog>
                        </>

                        <p className="my-3 text-sm text-gray-600 italic text-center">
                            Kindly click on the image for more details
                        </p>
                    </div>

                    <div className='md:w-1/2 p-6 mr-6 w-full mx-auto h-full bg-[#b8a287] md:rounded-2xl rounded-t-2xl shadow-lg'>
                        <div className='space-y-2'>
                            <h2 className='text-xl'>Boxer Brief</h2>
                            <p>3pcs Combo</p>
                            <div className='pb-2'>
                                <div className="font-medium">
                                    <span>Available Colors:</span>
                                    <ul className="list-disc list-inside ml-6 text-gray-700">
                                        <li>Black</li>
                                        <li>Light Grey</li>
                                        <li>Navy Blue</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 relative">
                                <p>Price: </p>
                                <span className="line-through">৳600</span>
                                <span className="text-red-600 text-xs font-medium py-1 rounded-lg absolute left-16 -top-4 ">
                                    17% OFF
                                </span>
                                <span className=" font-semibold pl-6">৳499</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;