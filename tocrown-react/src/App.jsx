import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa los componentes según tu estructura de carpetas
import Home from './pages/home/home.jsx';

// Club deportivo
import Historia from './pages/club/Historia.jsx';         
import Organigrama from './pages/club/Organigrama.jsx';   
import Logros from './pages/club/Logros.jsx';             
import Contacto from './pages/club/Contacto.jsx';         

// Área deportiva
import Equipos from './pages/area/Equipos.jsx';           
import Competiciones from './pages/area/Competiciones.jsx';
import Partidos from './pages/area/Partidos.jsx';
import Clasificaciones from './pages/area/Clasificaciones.jsx';
import Entrenamientos from './pages/area/Entrenamientos.jsx';
import Documentos from './pages/area/Documentos.jsx';

// Comunicación
import Comunicados from './pages/comunicacion/Comunicados.jsx'; 
import Fotos from './pages/comunicacion/Fotos.jsx';
import Horarios from './pages/comunicacion/Horarios.jsx';

// Tienda
import Tienda from './pages/tienda/Tienda.jsx';

// Inscríbete
import Inscripciones from './pages/inscribete/Inscripciones.jsx';

// Layout
import Header from './pages/layouts/Header.jsx';
import Footer from './pages/layouts/Footer.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* CLUB DEPORTIVO */}
        <Route path="/historia" element={<Historia />} />
        <Route path="/organigrama" element={<Organigrama />} />
        <Route path="/logros" element={<Logros />} />
        <Route path="/contacto" element={<Contacto />} />

        {/* AREA DEPORTIVA */}
        <Route path="/equipos" element={<Equipos />} />
        <Route path="/competiciones" element={<Competiciones />} />
        <Route path="/partidos" element={<Partidos />} />
        <Route path="/clasificaciones" element={<Clasificaciones />} />
        <Route path="/entrenamientos" element={<Entrenamientos />} />
        <Route path="/documentos" element={<Documentos />} />

        {/* COMUNICACION */}
        <Route path="/comunicados" element={<Comunicados />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/fotos" element={<Fotos />} />

        {/* TIENDA */}
        <Route path="/tienda" element={<Tienda />} />

        {/* INSCRIBETE */}
        <Route path="/inscripciones" element={<Inscripciones />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
