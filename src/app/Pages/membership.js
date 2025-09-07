import ThreeDCardDemo from "./threeCard";
import Hover from "./hover";
import Staff from "./Staff";

export default function Membership() {
  return (
    <div className="w-full px-2">
      <h1 className="mt-24 text-white text-3xl md:text-5xl font-bold text-center">
        Academy membership
      </h1>
      <div className="flex flex-col items-center w-full mt-8 md:flex-row md:justify-start md:space-x-12">
        <div className="w-full md:w-auto">
          <Hover />
        </div>
      </div>
    </div>
  );
}