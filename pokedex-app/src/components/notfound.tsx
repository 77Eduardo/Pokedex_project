import { useRouteError } from "react-router-dom";
import  Group  from '../assets/Group.svg';
import { Footer } from "./footer";


export default function NotFound() {

  return (
    <section className="flex flex-col justify-center items-center bg-[#D93E30] ">
      <div className="w-full md:w-auto">
        <img src={Group} alt="imagem de error" className="mx-auto"/>
      </div>
    <div>
        <button className="bg-[#F2CB07] shadow-custom2 w-[231px] h-[66px] rounded-[11px]">Return</button>
    </div>
    </section>
  );
}