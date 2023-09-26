import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";
export const LibraryApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
