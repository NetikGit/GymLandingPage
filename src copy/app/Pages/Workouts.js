
export default function Workout() {
    return (
        <>
           <div className="flex flex-wrap gap-2 mt-16 sm:mt-[50px] lg:mt-[120px] justify-center">
    {/* First Card */}
    <div className="relative w-full sm:w-[48%] lg:w-[30%] h-[360px] bg-cover bg-center" style={{ backgroundImage: "url('/fightercopy.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <p className="text-white font-bold text-[24px] sm:text-[36px] lg:text-[38px] mt-20 ml-4 text-center hover:bg-black">Self Defence</p>
            <p className="text-center text-[12px] sm:text-[18px] lg:text-[20px] w-[60%] sm:w-[60%] ml-[10%] sm:ml-[20%] text-white">
            Our academy specializes in self-defense training, empowering individuals with the skills and confidence to protect themselves.
             </p>
        </div>
    </div>

    {/* Second Card */}
    <div className="relative w-full sm:w-[48%] lg:w-[30%] h-[360px] bg-cover bg-center" style={{ backgroundImage: "url('/nan.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <p className="text-white font-bold text-[24px] sm:text-[36px] lg:text-[38px]  ml-4 mt-20 text-center hover:bg-black">Weapon's Training</p>
            <p className="text-center text-[12px] sm:text-[18px] lg:text-[20px] w-[60%] sm:w-[60%] ml-[10%] sm:ml-[20%] text-white">
             We teach our students a variety of weapons, including the 'Lathi', 'Nanchaku', and more. 
            </p>
        </div>
    </div>

    {/* Third Card */}
    <div className="relative w-full sm:w-[48%] lg:w-[30%] h-[360px] bg-cover bg-center" style={{ backgroundImage: "url('/poster2.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <p className="text-white font-bold text-[24px] sm:text-[36px] lg:text-[38px] mt-20 ml-4 text-center hover:bg-black">Carrier</p>
            <p className="text-center text-[12px] sm:text-[18px] lg:text-[20px] w-[60%] sm:w-[60%] ml-[10%] sm:ml-[20%] text-white">
            Our academy focuses on career advancement, equipping individuals with the skills, confidence, and expertise needed to excel in their professional journey
            </p>
        </div>
    </div>
</div>

        </>
    );
}
