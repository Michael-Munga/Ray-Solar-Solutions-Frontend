import React from "react";


import { Toaster } from "sonner";

import AppRoutes from "./routes/AppRoutes";
function App() {
  return (
    <div>
      <AppRoutes/>

      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
