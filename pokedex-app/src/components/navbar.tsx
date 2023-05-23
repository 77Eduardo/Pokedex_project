import Logo from '../assets/Logo.svg'

export const Navbar = () => {
    return (

    <nav className="shadow-custom bg-third w-full h-20"> 

        <div className="max-auto  flex justify-around items-center text-black h-20">
        
            <img src={Logo} alt="Logo do sistema" /> 
  
            <ul className='md:flex items-center font-Karla gap-6 '>

                <li className="font-medium text-dark py-3
                hover:border-b-2 hover:rounded-b-lg w-full hover:border-pharagraph
                hover:text-pharagraph after:content-[''] 
                group-hover:opacity-100 group-focus:opacity-100">Home</li>

                <li className="font-medium text-dark py-3
                hover:border-b-2 hover:rounded-b-lg w-full hover:border-pharagraph
                hover:text-pharagraph after:content-[''] 
                group-hover:opacity-100 group-focus:opacity-100">Pokédex</li>

                <li className="font-medium text-dark py-3
                hover:border-b-2 hover:rounded-b-lg w-full hover:border-pharagraph
                hover:text-pharagraph after:content-[''] 
                group-hover:opacity-100 group-focus:opacity-100">Lendarios</li>

                <li className="font-medium text-dark py-3
                hover:border-b-2 hover:rounded-b-lg w-full hover:border-pharagraph
                hover:text-pharagraph after:content-[''] 
                group-hover:opacity-100 group-focus:opacity-100">Documentaçao</li>
            </ul>  

        </div>            
    </nav>
    )
} 