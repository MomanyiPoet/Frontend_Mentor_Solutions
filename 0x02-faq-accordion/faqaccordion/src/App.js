import Accordion from "./pages/Accordion";
import { inject } from '@vercel/analytics';
 
inject();

function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

export default App;
