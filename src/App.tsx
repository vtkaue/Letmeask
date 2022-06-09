import { BrowserRouter, Route, Routes} from 'react-router-dom';

import { Home } from "./pages/Home-NewRoom/Home";
import { NewRoom } from "./pages/Home-NewRoom/NewRoom";

import { AuthContextProvider } from './contexts/AuthContext'
import { Room } from './pages/Room/Room';
import { AdminRoom } from './pages/AdminRoom/AdminRoom';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
          <Route path="/rooms/:id" element={<Room />} />
          <Route path="/admin/rooms/:id" element={<AdminRoom />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
