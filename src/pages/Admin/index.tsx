import { useState } from 'react';

import { Header } from '../../components/Header';
import { InputField } from '../../components/InputField';
import { RegisterButton } from '../../components/RegisterButton';

import { FiTrash } from 'react-icons/fi';

export function Admin() {
  const [nameLinkInput, setNameLinkInput] = useState('');
  const [url, setUrl] = useState('');
  const [backgroundColorInput, setBackgroundColorInput] =
    useState('rgb(39 39 42)');
  const [textColor, setTextColor] = useState('#f1f1f1');

  return (
    <main className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <form className="flex flex-col mt-4 mb-3 w-full max-w-xl">
        <label className="text-white mt-2">Link Name</label>
        <InputField
          placeholder="Enter link name ..."
          value={nameLinkInput}
          onChange={(event) => setNameLinkInput(event.target.value)}
        />

        <label className="text-white mt-2">Link Url</label>
        <InputField
          type="url"
          placeholder="Enter url name ..."
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />

        <section className="flex my-4 gap-5">
          <div className="flex gap-3">
            <label className="text-white mt-2">Background color:</label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={(event) => setBackgroundColorInput(event.target.value)}
            />
          </div>

          <div className="flex gap-3">
            <label className="text-white mt-2">Text color:</label>
            <input
              type="color"
              value={textColor}
              onChange={(event) => setTextColor(event.target.value)}
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

      <h2 className="mt-10">My Links 👇</h2>

      <article
        className="flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-3 mb-2 select-none"
        style={{ backgroundColor: 'rgb(39 39 42 / 0.5)', color: '#ccc' }}
      >
        <p>Channel Youtube</p>
        <div>
          <button>
            <FiTrash size={25} color="rgb(192 132 252)" />
          </button>
        </div>
      </article>
    </main>
  );
}
