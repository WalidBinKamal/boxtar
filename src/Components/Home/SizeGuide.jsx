import solo2t from '../../assets/bg-&-products/solo-2-t.webp'
import bg from '../../assets/bg-&-products/size-bg.webp'


const SizeChart = () => {
    const sizes = ["S", "M", "L", "XL"];
    const waist = ["27-30", "31-33", "34-36", "37-40"];
    return (
        <section id="size-guide" className="scroll-mt-24">
            <div className="bg-cover bg-center" style={{
                backgroundImage: `url(${bg})`,
            }}
            >
                <h1 className="text-2xl font-semibold md:mb-4 uppercase p-6">Underwear <br />Size Guide</h1>
                <div className="flex justify-center items-center md:gap-10 gap-2 md:pb-10 pb-6">
                    <div className="w-2/6">
                        <img src={solo2t} className='w-full' />
                    </div>
                    <div className="overflow-x-auto ">
                        {/* md and larger devices */}
                        <table className="hidden md:table min-w-full text-center border border-gray-300 border-collapse rounded-lg shadow-sm mb-4">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="py-3 px-4 text-left font-semibold text-gray-800 border border-gray-300">
                                        Fit Points
                                    </th>
                                    {sizes.map((size, i) => (
                                        <th
                                            key={i}
                                            className="py-3 px-4 font-semibold text-gray-800 border border-gray-300 text-center"
                                        >
                                            {size}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="bg-white hover:bg-gray-50 transition">
                                    <td className="py-3 px-4 text-left font-medium text-gray-700 border border-gray-300">
                                        Waist (Inch)
                                    </td>
                                    {waist.map((w, i) => (
                                        <td
                                            key={i}
                                            className="py-3 px-4 text-gray-800 border border-gray-300 text-center"
                                        >
                                            {w}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                        {/* Small Devices */}
                        <div className="md:hidden flex justify-center m-2">
                            <table className="min-w-full text-center border border-black/40 border-collapse rounded-lg">
                                <thead className="bg-[#dbb17d]">
                                    <tr>
                                        <th className="py-2 px-4 font-semibold text-gray-800 border border-black/40">Fit Points</th>
                                        <th className="py-2 px-4 font-semibold text-gray-800 border border-black/40">Waist</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sizes.map((size, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition">
                                            <td className="py-2 px-4 border border-black/40">{size}</td>
                                            <td className="py-2 px-4 border border-black/40">{waist[i]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SizeChart;