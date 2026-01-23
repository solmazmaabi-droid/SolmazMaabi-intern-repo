function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        px-4 py-2
        bg-blue-500 text-white font-medium
        rounded
        hover:bg-blue-600
        active:bg-blue-700
        active:scale-95
        transition
      "
    >
      {children}
    </button>
  );
}

export default Button;
