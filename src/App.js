import { useEffect, useState } from "react";
import TextEditor from "./components/TextEditor/TextEditor";

function debounce(fn, interval = 0) {
  let timeout;
  return (...params) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...params), interval);
  };
}

const saveToLocalStorage = debounce((key, val) => {
  localStorage.setItem(key, val);
}, 500);

function App() {
  const [title, setTitle] = useState(localStorage.getItem("title"));
  const [article, setArticle] = useState(localStorage.getItem("article"));

  useEffect(() => {
    saveToLocalStorage("title", title);
  }, [title]);

  useEffect(() => {
    saveToLocalStorage("article", article);
  }, [article]);

  return (
    <div className="mx-auto max-w-2xl h-screen flex flex-col">
      <input
        className="text-3xl mt-8 mb-4 px-4 w-full outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        autoFocus={true}
      />
      <TextEditor
        placeholder="Type your content here..."
        value={article}
        onChange={(e) => setArticle(e)}
        className="flex-grow"
      />
    </div>
  );
}

export default App;
