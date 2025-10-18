
import { Provider } from 'react-redux';
import { store } from './store';
import { AppRouter } from '@/components/router/AppRouter';
import { Toaster } from '@/components/ui/sonner';


function App() {
  // const [count, setCount] = useState(0)

  return (
      <Provider store={store}>
      <AppRouter />
      <Toaster />
    </Provider>
  );
}

export default App;
