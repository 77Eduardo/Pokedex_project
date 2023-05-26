import { PokemonCard } from "../components/pokemonCard";

export const Pokedex = () => {

    return (


 <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#F5F5F5]">
       <header className="text-center">
          <h1 className="font-normal text-5xl mt-7 mb-6">
            800{" "}
            <span className="font-bold">Pokemons</span> for you to choose your favorite
          </h1>
        </header>
        <div className="mb-6">
        <input className="bg-[#F2F2F2] rounded-[40px] 
        shadow-custom3 px-4 py-3 w-auto mx-auto outline-none 
        sm:w-[600px] lg:w-[1000px] xl:w-[1240px]" 
        type="text" placeholder="Find your pokemon..." />
        </div>
        <div className="grid grid-rows-1 w-full">
        <PokemonCard />
        </div>
        <footer className="mt-auto p-4">
        </footer>
      </section>
  )
};

