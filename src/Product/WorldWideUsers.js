import Image from "next/image";
import img1 from "@/assets/product-image/Bitly.png"
import img2 from "@/assets/product-image/Compass.png"
import img3 from "@/assets/product-image/Crocs.png"
import img4 from "@/assets/product-image/Doordash.png"
import img5 from "@/assets/product-image/Dropbox.png"
import img6 from "@/assets/product-image/G2.png"
import img7 from "@/assets/product-image/Luat.png"
import img8 from "@/assets/product-image/Pendo.png"
import img9 from "@/assets/product-image/Twilio.png"

const WorldWideUsers = () => {
  return (
     <div className="mb-8">
        <p className="text-4xl font-bold text-[#0B3558] lg:w-[680px] mx-auto text-center mb-10">
           Scheduling automation for more than{" "}
           <span className="text-[#465AF7]">20 million</span> users worldwide
      </p>
      
        <marquee behavior="" direction="">
          <div className="flex items-center space-x-16">
              <Image src={img1} alt="docs image" className="w-auto h-full"></Image>
              <Image src={img2} alt="docs image" className="w-auto h-full"></Image>
              <Image src={img3} alt="docs image" className="w-60 h-full"></Image>
              <Image src={img4} alt="docs image" className="w-auto h-full"></Image>
              <Image src={img5} alt="docs image" className="w-auto h-full"></Image>
              <Image src={img6} alt="docs image" className="w-auto h-full"></Image>
              <Image src={img7} alt="docs image" className="w-auto h-full"></Image>
              <Image src={img8} alt="docs image" className="w-auto h-full"></Image>
              <Image src={img9} alt="docs image" className="w-auto h-full"></Image>
          </div>
        </marquee>
     </div>
  );
};

export default WorldWideUsers;