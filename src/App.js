import { useEffect, useState } from "react";

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
    <div className="mx-auto mt-8 max-w-2xl">
      <input
        className="text-3xl w-full mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        className="w-full h-40"
        value={article}
        onChange={(e) => setArticle(e.target.value)}
        placeholder="Type your content here..."
      ></textarea>
    </div>
  );
}

export default App;
