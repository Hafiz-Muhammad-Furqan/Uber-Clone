import Button from "./Button";

const RideRequest = () => {
  return (
    <div className="h-[100dvh] w-full flex items-center flex-col relative">
      <div className="w-full h-full transition-opacity duration-300 ">
        <img src="/Images/Map.jpeg" alt="map" className="w-full h-full" />
      </div>
      <div className=" w-full flex justify-center items-center flex-col absolute bottom-0 px-4 gap-3 py-3 rounded-t-3xl bg-black transition-opacity duration-300 ">
        <div className="w-full flex flex-col items-start justify-center gap-4 px-3 py-1">
          <div className="w-full flex items-center justify-start gap-4">
            <img
              src="/Images/avatar.png"
              alt="avatar"
              className="w-11 h-11 rounded-full bg-black px-1 py-1"
            />
            <p className="text-white">Hafiz Muhammad Furqan</p>
          </div>

          <div className="w-full py-2 px-2 rounded-lg flex gap-2 items-center justify-start border-2 border-gray-300">
            <i className="ri-map-pin-line text-2xl text-gray-400"></i>
            <p className="text-zinc-400 text-sm font-semibold">To:</p>
            <p className="text-white text-[14px]">Lorem ipsum dolor sit.</p>
          </div>
          <div className="w-full  py-2 gap-2 px-2 rounded-lg border-2 border-gray-300 flex items-center justify-start">
            <i className="ri-map-pin-line text-2xl text-gray-400"></i>
            <p className="text-zinc-400 text-sm font-semibold ">From:</p>
            <p className="text-white text-[14px] ">Lorem ipsum dolor sit.</p>
          </div>
          <div className="w-full flex items-center justify-center gap-3">
            <i className="ri-cash-line text-[#C1F11D] text-xl"></i>
            <p className="text-white text-lg font-semibold text-center">
              PKR 300
            </p>
          </div>
          <Button label={"Accept for PKR 300"} colors={"bg-[#C1F11D]"} />
          <p className="text-white text-center w-full">Offer your fare</p>
          <div className="w-full grid grid-cols-3 gap-2">
            <Button label={"300"} colors={"bg-[#C1F11D]"} />
            <Button label={"300"} colors={"bg-[#C1F11D]"} />
            <Button label={"300"} colors={"bg-[#C1F11D]"} />
          </div>
          <Button label={"Close"} colors={"text-white bg-zinc-600"} />
        </div>
      </div>
    </div>
  );
};

export default RideRequest;
