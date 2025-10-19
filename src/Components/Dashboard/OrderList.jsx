import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const OrderList = () => {
    const axiosSecure = useAxiosSecure()

    const { data: orders, isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/orders`)
            return res.data
        }
    })
    // console.log(orders)

    const [localOrderList, setLocalOrderList] = useState([])
    useEffect(() => {
        if (orders) {
            setLocalOrderList(orders)
        }
    }, [orders])


    return (
        <div>
            <h2 className="md:text-3xl text-xl text-center font-semibold md:mb-4 my-4">Order List</h2>
            <div className="space-y-3">
                {!isLoading && orders?.map((order, index) => (
                    <div key={order._id} className="card bg-base-100 shadow-md border rounded-xl">
                        <div className="card-body p-4">
                            <div className="flex justify-between items-center">
                                <h2 className="font-semibold text-lg">Order #{order.orderID}</h2>
                                {/* status change */}
                                <select
                                    value={order.status}
                                    onChange={(e) => {
                                        const newStatus = e.target.value;

                                        // update local state instantly
                                        const updatedOrders = [...localOrderList];
                                        updatedOrders[index].status = newStatus;
                                        setLocalOrderList(updatedOrders);

                                        // patch to backend using orderID
                                        axiosSecure.patch(`/orders/${order.orderID}`, { status: newStatus })
                                            .then(res => {
                                                // console.log(res.data)
                                            })
                                            .catch(err => console.error(err));
                                    }}
                                    className={`border rounded px-2 py-1 font-medium ${order.status === "pending"
                                        ? "text-yellow-500 border-yellow-400"
                                        : order.status === "processing"
                                            ? "text-blue-500 border-blue-400"
                                            : order.status === "delivered"
                                                ? "text-green-500 border-green-400"
                                                : "text-red-500 border-red-400"
                                        }`}
                                >
                                    <option value={order.status}>{order.status}</option>
                                    {["pending", "processing", "delivered", "canceled"]
                                        .filter(status => status !== order.status)
                                        .map(status => (
                                            <option key={status} value={status}>
                                                {status.charAt(0).toUpperCase() + status.slice(1)}
                                            </option>
                                        ))}
                                </select>

                            </div>
                            <p className="text-sm text-gray-600">{order.name}</p>
                            <p className="text-sm text-gray-600">📞 {order.phone}</p>
                            <p className="text-sm text-gray-600">📍 {order.address}</p>
                            <div className="mt-2 text-sm space-y-1">
                                <p>Size: {order.size}</p>
                                <p>Quantity: {order.quantity}</p>
                                <p>Price: ৳{order.totalPrice}</p>
                                <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default OrderList;