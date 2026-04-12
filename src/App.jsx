import { Toaster } from "./components/ui/toaster";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import { ThemeProvider } from "./components/ThemeContext";

import Home from "./pages/Home";
import Tecnicas from "./pages/Tecnicas";
import TecnicaDetalhe from "./pages/TecnicaDetalhe";
import Conceitos from "./pages/Conceitos";
import ConceitoDetalhe from "./pages/ConceitoDetalhe";
import Glossario from "./pages/Glossario";

const AuthenticatedApp = () => {
  /*   const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } =
    useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-zinc-950">
        <div className="w-8 h-8 border-4 border-zinc-200 border-t-zinc-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === "user_not_registered") {
      return <UserNotRegisteredError />;
    } else if (authError.type === "auth_required") {
      navigateToLogin();
      return null;
    }
  } */

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" replace />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/tecnicas" element={<Tecnicas />} />
      <Route path="/tecnicas/:id" element={<TecnicaDetalhe />} />
      <Route path="/conceitos" element={<Conceitos />} />
      <Route path="/conceitos/:id" element={<ConceitoDetalhe />} />
      <Route path="/glossario" element={<Glossario />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    // <AuthProvider>
    //   <QueryClientProvider client={queryClientInstance}>
    <>
      <Router>
        <ThemeProvider>
          <AuthenticatedApp />
        </ThemeProvider>
      </Router>
      <Toaster />
    </>
    //   </QueryClientProvider>
    // </AuthProvider>
  );
}

export default App;
