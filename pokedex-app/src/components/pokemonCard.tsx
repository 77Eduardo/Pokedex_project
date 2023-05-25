 export const PokemonCard: React.FC = () => {


      return (
        <div className="grid grid-cols-3 gap-8">

              <div  className="rounded-md flex items-center">
                <div className="flex-grow">
                  <p className="text-pharagraph font-bold text-center pb-2"></p>           
                    <div className="text-[#4B4B4B] font-normal text-center">
                      <div className="flex justify-center">
                        <div className="flex flex-col items-center mx-1">
                          <div className="rounded-full bg-white border-[3px] border-pharagraph w-8 h-8 flex items-center justify-center">
                            <span className="text-black">
                            </span>
                          </div>
                          <span className="mt-1 text-[#4B4B4B] font-normal">Ataque</span>
                        </div>
                        <div className="flex flex-col items-center mx-1">
                          <div className="rounded-full bg-white border-[3px] border-pharagraph w-8 h-8 flex items-center justify-center">
                            <span className="text-black">
                            </span>
                          </div>
                          <span className="mt-1 text-[#4B4B4B] font-normal">Defesa</span>
                        </div>
                      </div>
                    </div>
                      <div className="flex justify-center items-center mt-3 space-x-2">          
                          <p></p>
                      </div>
                </div>
              <div className="w-[250.25px] h-[250.86px] mt-4">
            <div></div>
            </div>     
        </div>
     
    </div>
  );
};