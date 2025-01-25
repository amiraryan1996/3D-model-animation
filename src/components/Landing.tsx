import Image from 'next/image';
import SufiSide from '../public/image/suf-side.jpg';
import PixelPunk from '../public/image/pixelpunknft.jpg';
import NftArt from '../public/image/nft-non-fungible-tokens.jpg';
import mira from '../public/image/mira.png';
import Sufi from '../public/image/sufi.png';

export function Landing() {
  return (
    <div className=" relative h-[88vh] w-[86vw] rounded-3xl shadow-2xl">
      <div className=" absolute bottom-48 right-96">
        <Image src={mira} alt="mira" width={600} className=" -rotate-[35deg]" />
      </div>
      <div className=" absolute bottom-0 right-0 rounder-r-3xl rounded-b-3xl overflow-hidden">
        <Image src={Sufi} alt="sufi" width={1050} height={971} />
      </div>

      <p className=" absolute right-44 top-[12rem] text-neon-500 text-[10rem] font-Nothing">
        Jim
      </p>
      <p className=" absolute right-44 top-[24rem] text-neon-500 text-[10rem] font-Nothing">
        Way
      </p>
      <div className=" absolute bottom-12 left-20 w-[60rem] h-[24rem] flex flex-row gap-4 backdrop-blur-xl rounded-[4rem] border-2 border-zinc-900 p-2">
        <div className=" w-80 h-full rounded-[4rem] border-2 border-zinc-900 overflow-hidden">
          <Image
            src={SufiSide}
            alt="sufi-side"
            height={500}
            width={500}
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col px-2 py-6 justify-between items-center gap-2">
          <div className="flex flex-row gap-2 justify-center items-center w-full h-40">
            <div className=" w-72 h-40 rounded-[4rem] border-[1px] border-zinc-900">
              <div className=" flex flex-col gap-2">
                <div className=" flex flex-row gap-2 justify-center mt-4">
                  <p className=" text-slate-300 font-black text-2xl">
                    Token
                    <br />
                    Giveaway
                  </p>
                  <div className=" size-16 rounded-full overflow-hidden flex justify-center items-center">
                    <Image src={NftArt} alt="NftArt" />
                  </div>
                </div>
                <p className=" text-slate-300 font-Tiny text-sm ml-12">
                  Check on
                  <br />
                  Nov 23 2024
                </p>
              </div>
            </div>
            <div className=" w-72 h-40 rounded-[4rem] border-[1px] border-zinc-900">
              <div className=" flex flex-col gap-2 justify-center">
                <div className=" flex flex-row gap-2 justify-center mt-4">
                  <p className=" text-slate-300 font-black text-2xl">
                    daily
                    <br />
                    challenges
                  </p>
                  <div className=" size-16 rounded-full overflow-hidden flex justify-center items-center">
                    <Image src={PixelPunk} alt="PixelPunk" />
                  </div>
                </div>
                <p className=" text-slate-300 font-Tiny text-sm ml-12">
                  Check on
                  <br />
                  Nov 23 2024
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[36rem] h-36 rounded-[3.5rem] flex flex-col justify-evenly items-start border-[1px] border-zinc-900">
            <p className=" px-36 text-2xl font-extrabold">Events</p>
            <div className="flex flex-row w-full justify-evenly">
              <p className="flex flex-row gap-2">
                <span className=" font-Tiny font-black text-[3rem] ">3</span>
                <span className=" text-lg font-bold">Passes</span>
              </p>
              <p className="flex flex-row gap-2">
                <span className=" font-Tiny font-black text-[3rem] text-neon-500 ">
                  29
                </span>
                <span className=" text-lg font-bold">Incoming</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
