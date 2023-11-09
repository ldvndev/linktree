import { SocialMediaLinks } from "../../components/SocialMediaLinks";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export function Home() {
  return(
      <div className="flex items-center justify-center flex-col w-full py-4 ">
        <h1 className="md:text-4xl font-bold text-gray-100 mt-20 text-2xl">
          @ldvndev | Leonardo Rodrigues
        </h1>
        <span className="text-gray-200 mb-5 mt-3 text-base">
          👇 Veja meus links!
        </span>

        <main className="flex flex-col w-11/12 max-w-xl text-center mt-3">
          <section className="bg-zinc-800 mb-4 w-full py-2 rounded-lg
           select-none transition-transform hover:scale-105 cursor-pointer">
            <a>
              <p className="text-gray-200 text-base md:text-lg">
                Github: /ldvndev
              </p>
            </a>
          </section>
        </main>

        <footer className="flex justify-center gap-3 my-4">
          <SocialMediaLinks  url="https://github.com/ldvndev">
            <FaGithub 
              className="transition-transform hover:fill-slate-300" 
              size={35} 
              color='#d1d5db'
            />
          </SocialMediaLinks>

          <SocialMediaLinks url="https://www.linkedin.com/in/ldrigues/">
            <FaLinkedin 
              className="transition-transform hover:fill-slate-300" 
              size={35} 
              color='#d1d5db'
            />
          </SocialMediaLinks>

          <SocialMediaLinks url="https://www.instagram.com">
            <FaInstagram 
              className="transition-transform hover:fill-slate-300" 
              size={35} 
              color='#d1d5db'
            />
          </SocialMediaLinks>
        </footer>
        
      </div>    
  );
}