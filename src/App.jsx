import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";

export default function App() {
  <div className="p-6 bg-blue-600 text-white">Tailwind test</div>

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <HelloWorld name="Focus Bear" />
      <Counter />
    </div>
  );
}
