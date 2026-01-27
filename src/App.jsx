import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
import ListForm from "./components/ListForm";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import UseEffectDemo from "./components/UseEffectDemo";
import UseMemoDemo from "./components/UseMemoDemo";


export default function App() {
  <div className="p-6 bg-blue-600 text-white">Tailwind test</div>

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      
      <nav className="flex gap-4 mb-6">
        <Link to="/" className="text-blue-600 underline">
          Home
        </Link>
        <Link to="/profile" className="text-blue-600 underline">
          Profile
        </Link>
        <Link to="/components/HelloWorld" className="text-blue-600 underline">
          HelloWorld
        </Link>
        <Link to="/components/Counter" className="text-blue-600 underline">
          Counter
        </Link>
        <Link to="/components/ListForm" className="text-blue-600 underline">
          ListForm
        </Link>
        <Link to="/components/UseEffectDemo" className="text-blue-600 underline">
          UseEffect
        </Link>
        <Link to="/components/UseMemoDemo" className="text-blue-600 underline">
          UseMemo
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/components/HelloWorld" element={<HelloWorld name="Focus Bear" />} />
        <Route path="/components/Counter" element={<Counter />} />
        <Route path="/components/ListForm" element={<ListForm />} />
        <Route path="/components/UseEffectDemo" element={<UseEffectDemo />} />
        <Route path="/components/UseMemoDemo" element={<UseMemoDemo />} />
      </Routes>
   
    </div>
  );
}





