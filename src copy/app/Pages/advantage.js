import Logo from "../../../public/logo.png";
import Image from "next/image";
import lineIcon from "../../../public/icon_line.png";
import timeIcon from "../../../public/icon_time.png";
import fitnessIcon from "../../../public/icon_fitness.png";
import equipementIcon from "../../../public/icon_eqipment.png";

export default function Advantage() {
  return (
    <div className="mt-[100px] mx-[7%] text-white">
      {/* Title */}
      <h1 className="text-[36px] md:text-[48px] font-outfit text-center md:text-left">
        Why Join Us?
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* Advantage Item 1 */}
        <div className="flex items-center gap-6">
          <Image className="w-[41px] h-[52px]" src={lineIcon} alt="line icon" />
          <div className="w-full md:w-[400px]">
            <h1 className="text-[18px] font-bold">Branches.</h1>
            <p className="text-[14px] text-gray-300">
              A spacious Academy for sports – and have four branches suitable to your location.
            </p>
          </div>
        </div>

        {/* Advantage Item 2 */}
        <div className="flex items-center gap-6">
          <Image className="w-[41px] h-[52px]" src={equipementIcon} alt="equipment icon" />
          <div className="w-full md:w-[400px]">
            <h1 className="text-[18px] font-bold">More than 4 Combat Games</h1>
            <p className="text-[14px] text-gray-300">
             Karate ,Grappling ,KickBoxing,etc.
            </p>
          </div>
        </div>

        {/* Advantage Item 3 */}
        <div className="flex items-center gap-6">
          <Image className="w-[41px] h-[52px]" src={timeIcon} alt="time icon" />
          <div className="w-full md:w-[400px]">
            <h1 className="text-[18px] font-bold">Specific Training Sessions</h1>
            <p className="text-[14px] text-gray-300">
              Our Academy features dedicated days for strength, technical training and functional training.
            </p>
          </div>
        </div>

        {/* Advantage Item 4 */}
        <div className="flex items-center gap-6">
          <Image className="w-[41px] h-[52px]" src={fitnessIcon} alt="fitness icon" />
          <div className="w-full md:w-[400px]">
            <h1 className="text-[18px] font-bold">Round the Clock Operations</h1>
            <p className="text-[14px] text-gray-300">
              More then two batches, allowing you to train at your convenience anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
