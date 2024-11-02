import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import ContactView from "./pages/ContactView/ContactView";
import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

function App() {
  const [contacts, setContacts] = useState([]);

  // Get data
  const getData = async () => {
    const res = await fetch("https://boolean-uk-api-server.fly.dev/shyye/contact");
    const data = await res.json();
    setContacts(data);
  };

  // Load data
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <header>
        <h1>Contacts</h1>
        <nav>
          <ul>
            <li><Link to={"/"}>Contact List</Link></li>
            <li><Link to={"/add"}>Add new Contact</Link></li>
          </ul>
        </nav>
      </header>
      <AppContext.Provider value={{ contacts, setContacts }}>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<ContactView />} />
            <Route path="/contact/:id" element={<ContactView />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export {App, AppContext};
