import { useEffect, useState } from "react";
import { api } from "../configs/api";

type TypePokemonsColors = {
    [key: string]: string;
};

const typePokemonsColors: TypePokemonsColors = {
    electric: '#F7C545',
    poison: '#A974BC',
    psychic: '#A974BC',
    fairy: '#A974BC',
    ghost: '#A974BC',
    ground: '#9B897B',
    normal: '#76AADB',
    flying: '#76AADB',
    fire: '#F76545',
    fighting: '#F76545',
    dragon: '#F76545',
    ice: '#A2CFF0',
    water: '#A2CFF0',
    dark: '#A1A1A1',
    rock: '#A1A1A1',
    steel: '#A1A1A1',
    bug: '#70A83B',
    grass: '#70A83B'
}

interface PokemonResult {
    name: string;
    url: string;
    details?: {
        id: number;
        name: string;
        types:  Array<{ type: { name: string; url: string } }>;
        sprites: {
            other:{
                dream_world:{
                    front_default: ""
                }
            }
        }
        experience?: number;
        abilities?: string;
        hp?: number;
        spAttack?: number;
        spDefense?: number;
        generation?: number;
        index?: number;
        stats: Array<{
            base_stat: number;
            stat: {
              name: string;
              url: string;
            };
          }>;
    }
}

 export const PokemonCard: React.FC = () => {
     const [pokemons, setPokemons] = useState<PokemonResult[]>()
     
     
     useEffect(() => {
        api
        .get("/pokemon/?limit=9&offset=0")
        .then((response) => {
            const results: PokemonResult[] = response.data.results;
            const promises = results.map((pokemon) =>
            api.get(pokemon.url).then((res) => {
                const details = res.data;
                const updatedPokemon: PokemonResult = {
                    ...pokemon,
                    details,
                };
                console.log(res)
                return updatedPokemon;
            })
            );
            
            Promise.all(promises)
            .then((updatedPokemons) => {
                setPokemons(updatedPokemons);
            })
              .catch((err) => {
                console.error("Ops! Ocorreu um erro:", err);
              });
          })
          .catch((err) => {
              console.error("Ops! Ocorreu um erro:", err);
          });
      }, []);


  

      return (
        <div className="grid grid-cols-3 gap-8">
              <div className="rounded-md flex items-center">
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
                          <p className="px-2 py-1 text-sm rounded-[11px] font-normal text-[#212121] shadow-custom1"  
                          >
                          </p>
                      </div>
                </div>
              <div className="w-[250.25px] h-[250.86px] mt-4">
                <div className="w-full h-full" >
                 
        
               </div>
            </div>
        </div>
    </div>
      )
}
            
     
