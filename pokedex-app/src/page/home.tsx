import BannerComplete1 from '../assets/BannerComplete1.svg'

export const Home = () => {
    return (
        
        <section className="min-h-[calc(100vh-5rem)] m-0 left-0 right-0 bottom-0 top-0 ">
                <div className="flex justify-end">
                    <div className="flex flex-col justify-around w-[516px] h-[557px]  ">

                        <h1 className='pt-10 m-0 p-0 text-[72px] text-dark '>
                            <span className="font-bold">Find </span>all your favorite <br /> <span className="font-bold">Pokemon</span>
                        </h1>
                        
                        <p className="pt-4 text-[32px] text-dark font-normal">You can know the type of Pokemon, <br />
                         its strengths, disadvantages <br />
                         and abilities</p>

                        <div className="pt-6">
                            <button className="bg-[#73D677] w-[231px] h-[66px] rounded-[11px] shadow-custom2 font-bold pb-2" type='button'>
                                See pokemons
                            </button>
                        </div>
                    </div>   
                    <img src={BannerComplete1} alt="imagem principal da pagina" />
                </div>
        </section>
    )
}
