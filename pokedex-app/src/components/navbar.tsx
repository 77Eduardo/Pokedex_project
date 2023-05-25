import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import BurgenBtn from '../assets/BurgenBtn.svg'

export const Navbar = () => {
    return (

    <nav className="shadow-custom bg-third w-full h-20"> 

        <div className="max-auto  flex justify-around items-center text-black h-20">       
            <img src={Logo} alt="Logo do sistema" /> 

            <input type="checkbox" id="menu-toggle" className="hidden" />
            <label htmlFor="menu-toggle" className='cursor-poiter md:hidden block'>

            <img src={BurgenBtn} alt="toggle" className='h-6 w-6 fill-current text-dark'/>

            </label>

            <ul className='md:flex items-center font-Karla gap-6 '>

                <Link to="/"><li className="font-medium text-dark py-3
                hover:border-b-2 hover:rounded-b-lg w-full hover:border-pharagraph
                hover:text-pharagraph after:content-[''] 
                group-hover:opacity-100 group-focus:opacity-100">Home</li></Link>

                <Link to="/pokedex"><li className="font-medium text-dark py-3
                hover:border-b-2 hover:rounded-b-lg w-full hover:border-pharagraph
                hover:text-pharagraph after:content-[''] 
                group-hover:opacity-100 group-focus:opacity-100">Pokédex</li></Link>

                <Link to="/lendarios"><li className="font-medium text-dark py-3
                hover:border-b-2 hover:rounded-b-lg w-full hover:border-pharagraph
                hover:text-pharagraph after:content-[''] 
                group-hover:opacity-100 group-focus:opacity-100">Lendarios</li></Link>

                <Link to="/documentacao"><li className="font-medium text-dark py-3
                hover:border-b-2 hover:rounded-b-lg w-full hover:border-pharagraph
                hover:text-pharagraph after:content-[''] 
                group-hover:opacity-100 group-focus:opacity-100">Documentaçao</li></Link>
            </ul>  

        </div>            
    </nav>
    )
} 