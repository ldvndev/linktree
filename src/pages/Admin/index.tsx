import { useState } from "react";
import { Header } from "../../components/Header";
import { InputField } from "../../components/InputField";

export function Admin() {
  const [nameLinkInput, setNameLinkInput] = useState('')
  const [url, setUrl] = useState('')
  const [backgroundColorInput, setBackgroundColorInput] = useState('rgb(39 39 42)')
  const [textColor, setTextColor] = useState('#f1f1f1')
 
  return(
    <main className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <form className="flex flex-col mt-4 mb-3 w-full max-w-xl">
        <label className="text-white/80 font-medium mt-2">Link name</label>
        <InputField 
          placeholder="Enter link name ..."
          value={nameLinkInput}
          onChange={event => setNameLinkInput(event.target.value)}
        />

        <label className="text-white/80 font-medium mt-2">Link url</label>
        <InputField 
          type="url"
          placeholder="Enter url name ..."
          value={url}
          onChange={event => setUrl(event.target.value)}
        />

        <section className="flex my-4 gap-5">
          <div className="flex gap-3">
            <label className="text-white/80 font-medium mt-2">
              Background color:
            </label>
            <input 
              type="color"
              value={backgroundColorInput}
              onChange={event => setBackgroundColorInput(event.target.value)}
            />
          </div>

          <div className="flex gap-3">
            <label className="text-white/80 font-medium mt-2">
              Text color:
            </label>
            <input 
              type="color"
              value={textColor}
              onChange={event => setTextColor(event.target.value)}
            />
          </div>
        </section>

        <div className="flex items-center justify-start flex-col mb-7 bg-zinc-800/30 rounded-md h-32">
          <label className="text-white/80 font-medium mt-2 mb-2">
            Preview:
          </label>

          <article 
            className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-500 rounded px-1 py-1"
            style={{ marginBottom: 8, marginTop: 8, backgroundColor: backgroundColorInput }}
          >
            <p 
              style={{ color: textColor, fontWeight: "bold"}}
            >
              Github
            </p>
          </article>
        </div>
      </form>
    </main>
  );
}