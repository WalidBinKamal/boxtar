import { BiMailSend, BiPhone } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <section>
            <div id="contact" className="scroll-mt-24">
                <h1 className='text-2xl font-semibold mb-4'>Contact Us</h1>
                <div className="space-y-4 text-gray-700">
                    <p className="flex items-center gap-2">
                        <BiPhone className="w-5 h-5 text-blue-600" />
                        <a href="tel:01824677474" className="hover:underline">
                            01824677474
                        </a>
                    </p>
                    <p className="flex items-center gap-2">
                        <BsWhatsapp className="w-5 h-5 text-green-600" />
                        <a
                            href="https://wa.me/8801824677474"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            01824677474
                        </a>
                    </p>



                    <p className="flex items-center gap-2 ">
                        <BiMailSend className="w-5 h-5 text-orange-600" />
                        <a href="mailto:boxtarbd@gmail.com" className="hover:underline ">
                            boxtarbd@gmail.com
                        </a>
                    </p>

                    <div className="flex md:justify-normal items-center gap-6 mt-4">
                        <a
                            href="https://www.facebook.com/profile.php?id=61580289087565"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition shadow-lg p-2 rounded-lg bg-gray-200"
                        >
                            <FaFacebook className="w-8 h-8 text-blue-700" />
                        </a>

                        <a
                            href="https://www.instagram.com/boxtarbd?utm_source=ig_web_button_share_sheet&igsh=amV5OHd1OWo3bGty"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition shadow-lg p-2 rounded-lg bg-gray-200"
                        >
                            <FaInstagram className="w-8 h-8 text-pink-500" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;