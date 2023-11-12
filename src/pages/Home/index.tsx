import { useEffect, useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { dataBase } from '../../services/firebase';
import {
  getDocs,
  collection,
  orderBy,
  query,
  doc,
  getDoc,
} from 'firebase/firestore';
import { SocialMediaLinks } from '../../components/SocialMediaLinks';

interface LinksProps {
  id: string;
  name: string;
  url: string;
  background: string;
  color: string;
}

interface SocialMediaLinksProps {
  github: string;
  linkedin: string;
  instagram: string;
}

export function Home() {
  const [links, setLinks] = useState<LinksProps[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialMediaLinksProps>();

  useEffect(() => {
    function dataLinks() {
      const linksReference = collection(dataBase, 'links');
      const queryReferences = query(linksReference, orderBy('created', 'asc'));

      getDocs(queryReferences).then(response => {
        const list = [] as LinksProps[];

        response.forEach(link => {
          list.push({
            id: link.id,
            name: link.data()?.name,
            background: link.data()?.background,
            color: link.data()?.color,
            url: link.data()?.url,
          });
        });
        setLinks(list);
      });
    }
    dataLinks();
  }, []);

  useEffect(() => {
    function dataSocialLinks() {
      const docReference = doc(dataBase, 'social', 'socialLinks');
      getDoc(docReference).then(response => {
        if (response.data() !== undefined) {
          setSocialLinks({
            github: response.data()?.urlGithub,
            linkedin: response.data()?.urlLinkedin,
            instagram: response.data()?.urlInstragram,
          });
        }
      });
    }

    dataSocialLinks();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col w-full py-4 ">
      <h1 className="md:text-4xl font-bold text-gray-100 mt-20 text-2xl">
        @ldvndev | Leonardo Rodrigues
      </h1>
      <span className="text-gray-200 mb-5 mt-3 text-base">
        👇 Veja meus links!
      </span>

      <main className="flex flex-col w-11/12 max-w-xl text-center mt-3">
        {links.map(link => (
          <section
            style={{ backgroundColor: link.background }}
            className="bg-zinc-800 mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer"
            key={link.id}
          >
            <a href={link.url} target="_blank">
              <p
                className="text-gray-200 text-base md:text-lg"
                style={{ color: link.color }}
              >
                {link.name}
              </p>
            </a>
          </section>
        ))}
      </main>

      {socialLinks && Object.keys(socialLinks).length > 0 && (
        <footer className="flex justify-center gap-3 my-4">
          <SocialMediaLinks url={socialLinks?.github}>
            <FaGithub
              className="transition-transform hover:fill-slate-300"
              size={35}
              color="#d1d5db"
            />
          </SocialMediaLinks>

          <SocialMediaLinks url={socialLinks?.linkedin}>
            <FaLinkedin
              className="transition-transform hover:fill-slate-300"
              size={35}
              color="#d1d5db"
            />
          </SocialMediaLinks>

          <SocialMediaLinks url={socialLinks?.instagram}>
            <FaInstagram
              className="transition-transform hover:fill-slate-300"
              size={35}
              color="#d1d5db"
            />
          </SocialMediaLinks>
        </footer>
      )}
    </div>
  );
}
