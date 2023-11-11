import { FormEvent, useState } from 'react';

import { dataBase } from '../../services/firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';

import { Header } from '../../components/Header';
import { InputField } from '../../components/InputField';
import { SaveLinksButton } from '../../components/SaveLinksButton';

import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

export function SocialMedia() {
  const [urlGithub, setUrlGithub] = useState('');
  const [urlLinkedin, setUrlLinkedin] = useState('');
  const [urlInstragram, setUrlInstragram] = useState('');

  async function handleSaveUrlSocialNetwork(event: FormEvent) {
    event.preventDefault();

    await setDoc(doc(dataBase, 'social', 'socialLinks'), {
      urlGithub,
      urlLinkedin,
      urlInstragram,
    });
  }

  return (
    <main className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />
      <h1 className="mb-5 mt-5 text-lg">Links Social Networks 🙍‍♂️</h1>

      <form
        className="flex flex-col mt-4 mb-3 w-full max-w-xl"
        onSubmit={handleSaveUrlSocialNetwork}
      >
        <label className="flex items-center">
          <FiGithub />
          <span className="ml-3">Github:</span>
        </label>
        <InputField
          placeholder="https://github.com/ldvndev"
          type="url"
          value={urlGithub}
          onChange={event => setUrlGithub(event.target.value)}
        />

        <label className="flex items-center">
          <FiLinkedin />
          <span className="ml-3">Linkedin:</span>
        </label>
        <InputField
          placeholder="https://linkedin.com/in/ldvndev"
          type="url"
          value={urlLinkedin}
          onChange={event => setUrlLinkedin(event.target.value)}
        />

        <label className="flex items-center">
          <FiInstagram />
          <span className="ml-3">Instagram:</span>
        </label>
        <InputField
          placeholder="https://instragram.com/ldvndev"
          type="url"
          value={urlInstragram}
          onChange={event => setUrlInstragram(event.target.value)}
        />
        <SaveLinksButton type="submit" />
      </form>
    </main>
  );
}
