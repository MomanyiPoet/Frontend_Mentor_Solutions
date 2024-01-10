import Card from './pages/Card';
import { inject } from '@vercel/analytics';
 
inject();

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

export default App;
