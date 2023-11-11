import { FormEvent, useEffect, useState } from 'react';
import { FiTrash } from 'react-icons/fi';

import { dataBase } from '../../services/firebase';
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
} from 'firebase/firestore';

import { Header } from '../../components/Header';
import { InputField } from '../../components/InputField';
import { RegisterButton } from '../../components/RegisterButton';

interface LinksProps {
  id: string;
  name: string;
  url: string;
  background: string;
  color: string;
}

export function Admin() {
  const [nameLinkInput, setNameLinkInput] = useState('');
  const [url, setUrl] = useState('');
  const [backgroundColorInput, setBackgroundColorInput] =
    useState('rgb(39 39 42)');
  const [textColor, setTextColor] = useState('#f1f1f1');
  const [links, setLinks] = useState<LinksProps[]>([]);

  useEffect(() => {
    const links = collection(dataBase, 'links');
    const searchCustom = query(links, orderBy('created', 'asc'));

    const unsubscribe = onSnapshot(searchCustom, snapshot => {
      const list = [] as LinksProps[];

      snapshot.forEach(document => {
        list.push({
          id: document.id,
          name: document.data().name,
          url: document.data().url,
          background: document.data().background,
          color: document.data().color,
        });
      });

      setLinks(list);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function handleRegisterLinks(event: FormEvent) {
    event.preventDefault();

    if (nameLinkInput === '' || url === '') {
      alert('Please inform the fields');
      return;
    }

    await addDoc(collection(dataBase, 'links'), {
      name: nameLinkInput,
      url: url,
      background: backgroundColorInput,
      color: textColor,
      created: new Date(),
    });

    setNameLinkInput('');
    setUrl('');
  }

  async function handleDeleteLink(id: string) {
    const deleteLink = doc(dataBase, 'links', id);

    await deleteDoc(deleteLink);
  }

  return (
    <main className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <form
        className="flex flex-col mt-4 mb-3 w-full max-w-xl"
        onSubmit={handleRegisterLinks}
      >
        <label className="text-white mt-2">Link Name</label>
        <InputField
          placeholder="Enter link name ..."
          value={nameLinkInput}
          onChange={event => setNameLinkInput(event.target.value)}
        />

        <label className="text-white mt-2">Link Url</label>
        <InputField
          type="url"
          placeholder="Enter url name ..."
          value={url}
          onChange={event => setUrl(event.target.value)}
        />

        <section className="flex my-4 gap-5">
          <div className="flex gap-3">
            <label className="text-white mt-2">Background color:</label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={event => setBackgroundColorInput(event.target.value)}
            />
          </div>

          <div className="flex gap-3">
            <label className="text-white mt-2">Text color:</label>
            <input
              type="color"
              value={textColor}
              onChange={event => setTextColor(event.target.value)}
            />
          </div>
        </section>

        {nameLinkInput !== '' && (
          <div className="flex items-center justify-start flex-col mb-7 bg-zinc-800/30 rounded-md h-32">
            <label className="text-white/80 font-medium mt-2 mb-2">
              Preview:
            </label>

            <article
              className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-500 rounded px-1 py-1"
              style={{
                marginBottom: 8,
                marginTop: 8,
                backgroundColor: backgroundColorInput,
              }}
            >
              <p style={{ color: textColor, fontWeight: 'bold' }}>
                {nameLinkInput}
              </p>
            </article>
          </div>
        )}

        <RegisterButton type="submit" />
      </form>

      <h2 className="mb-10 mt-10">My Links 👇</h2>

      {links.map(link => (
        <article
          key={link.id}
          className="flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-3 mb-2 select-none"
          style={{ backgroundColor: link.background, color: link.color }}
        >
          <p>{link.name}</p>
          <div>
            <button onClick={() => handleDeleteLink(link.id)}>
              <FiTrash size={25} color="rgb(192 132 252)" />
            </button>
          </div>
        </article>
      ))}
    </main>
  );
}
