import { useState } from "react";
import group from '../assets/bg-&-products/group-1.png'
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/userAxiosPublic";

const Order = () => {
    const axiosPublic = useAxiosPublic()
    const [quantity, setQuantity] = useState(1); // default quantity
    const pricePerItem = 499; // price in Taka

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        } else if (e.target.value === "") {
            setQuantity(""); // allow empty input
        }
    };

    const totalPrice = quantity ? quantity * pricePerItem : 0;
    const handleOrder = (e) => {
        e.preventDefault(); // prevent page reload

        const formData = new FormData(e.target);

        const orderData = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            address: formData.get("address"),
            size: formData.get("size"),
            quantity: quantity,
            totalPrice: totalPrice,
        };

        Swal.fire({
            title: "Do you want to confirm the order?",
            confirmButtonText: "Confirm",
            showCancelButton: true,
            denyButtonText: `Cancel`
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const data = await axiosPublic.post('/orders', orderData)
                console.log(data)
                if (data.data.insertedId) {
                    Swal.fire("Confirmed!", `Your order id is: ${data.data.orderID}`, "success");
                    e.target.reset();
                    setQuantity(1);
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: '<a href="#">Your order is not confirmed.</a>'
                    });
                }
            }
        });

    };


    return (
        <section id="order" className="scroll-mt-24">
            <div className="md:my-6 mt-4">
                <form onSubmit={handleOrder} className="w-full my-4">
                    <div className='md:flex gap-4'>
                        <div className='md:w-1/2 space-y-4'>
                            <h1 className='text-2xl font-semibold'>Order</h1>
                            <h2 className="text-lg">Billing Details</h2>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="input input-bordered w-full rounded-lg"
                                required
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Enter your phone number"
                                className="input input-bordered w-full rounded-lg no-spinner"
                                maxLength={11}
                                inputMode="numeric"
                                onInput={(e) => {
                                    e.target.value = e.target.value.replace(/\D/g, ""); // only digits
                                }}
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Enter your address"
                                className="input input-bordered w-full rounded-lg"
                                required
                            />
                            <select
                                className="select select-bordered w-full rounded-lg"
                                name="size"
                                required
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select your size
                                </option>
                                <option value="S">S (28-30)</option>
                                <option value="M">M (32-34)</option>
                                <option value="L">L (36-38)</option>
                                <option value="XL">XL (40-42)</option>
                            </select>
                            <h2 className="text-lg">Shipping</h2>
                            <input type="text" placeholder="Free Shipping (Cash on Delivery)"
                                className="input input-bordered w-full font-bold"
                                disabled
                            />
                        </div>
                        <div className="md:w-1/2 my-4">
                            <h1 className='text-2xl font-semibold md:mb-8'>Your Order</h1>
                            <div className="w-full mx-auto md:mt-2 bg-white rounded-2xl shadow-lg p-3">
                                {/* Header */}
                                <div className="flex justify-between border-b border-gray-300 pb-3 mb-4">
                                    <h2 className="font-semibold text-gray-800 text-lg">Product</h2>
                                    <h2 className="font-semibold text-gray-800 text-lg">Subtotal</h2>
                                </div>
                                {/* Product Row */}
                                <div className="flex items-center justify-between mb-4">
                                    {/* Left: Image + Name + Quantity */}
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={group}
                                            alt="Product"
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <div>
                                            <h3 className="font-medium text-gray-700">Boxer Brief (3pcs Combo)</h3>
                                            <div className="flex items-center mt-2 space-x-2">
                                                <span className="text-gray-500">Quantity:</span>
                                                <input
                                                    type="text"
                                                    min={1}
                                                    value={quantity}
                                                    onChange={handleQuantityChange}
                                                    className="input input-bordered w-20 rounded-lg text-center "
                                                    inputMode="numeric"
                                                    onInput={(e) => {
                                                        e.target.value = e.target.value.replace(/\D/g, ""); // only digits
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Right: Price */}
                                    <div className="font-medium text-gray-800">{totalPrice} ৳</div>
                                </div>
                                {/* Subtotal */}
                                <div className="flex justify-between border-t border-gray-300 pt-3 mt-3">
                                    <span className="font-semibold text-gray-700">Total</span>
                                    <span className="font-semibold text-gray-800">{totalPrice} ৳</span>
                                </div>
                                <div className="w-full mt-6">
                                    <button
                                        type="submit"
                                        className="w-full btn btn-outline btn-info text-black rounded-lg font-semibold"
                                    >
                                        Place Order
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Order;