import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import ContactView from "./pages/ContactView/ContactView";

function App() {
  return (
    <>
      <header>
        <h1>Contacts</h1>
        <nav>
          <ul>
            <li>Contact List</li>
            <li>Add new Contact</li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<ContactView />} />
        <Route path="/contact/:id" element={<ContactView />} />     
      </Routes>
    </>
  );
}

export default App;
