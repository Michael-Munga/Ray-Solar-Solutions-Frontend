import Customer from "./components/CustomerComponents/Customer";
import { Toaster } from "sonner";
function App() {
  return (
    <div>
      <Customer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
