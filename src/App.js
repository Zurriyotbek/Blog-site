import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBlog } from "./redux/reducer/blogSlice";

function App() {
  const blogs = useSelector((state) => state.blog.blogs);
  const dipatch = useDispatch();

  const [inputTitleValue, setInputTitleValue] = useState("");
  const [inputTextValue, setInputTextValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredArr, setFilteredArray] = useState(blogs);

  useEffect(() => {
    setFilteredArray(blogs);
  }, [blogs]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now(),
      title: inputTitleValue,
      text: inputTextValue,
    };

    dipatch(addBlog(newBlog));

    setInputTitleValue("");
    setInputTextValue("");
  };

  useEffect(() => {
    if (searchValue == "") {
      setFilteredArray(blogs);
    } else {
      const filtered = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredArray(filtered);
    }
  }, [searchValue]);

  return (
    <div className="App" style={{ paddingTop: "50px" }}>
      <div>
        Search
        <input
          type={"text"}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          value={searchValue}
        />
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type={"text"}
            onChange={(e) => setInputTitleValue(e.target.value)}
            value={inputTitleValue}
          />
        </label>
        <label>
          Text
          <input
            type={"text"}
            onChange={(e) => setInputTextValue(e.target.value)}
            value={inputTextValue}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {filteredArr.map((blog) => (
          <li key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
