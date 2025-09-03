import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";

function App() {
  // Example query (mock fetch)
  const { data, isLoading } = useQuery({
    queryKey: ["hello"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 1000)); // fake delay
      return "Hello from React Query!";
    },
  });

  const handleToast = () => {
    toast.success("This is a toast notification!");
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">🚀 React + Vite + Tailwind + Sonner</h1>
      <p className="mb-4">{isLoading ? "Loading..." : data}</p>
      <button
        onClick={handleToast}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Toast
      </button>
    </div>
  );
}

export default App;
