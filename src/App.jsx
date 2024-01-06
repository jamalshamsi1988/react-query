import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./componenets/HomePage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes } from "react-router-dom";
import Users from "./componenets/Users";
import UserDetailes from "./componenets/UserDetailes";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetailes />} />

      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
