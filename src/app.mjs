import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';
import expressLayouts from 'express-ejs-layouts';
import landingRoutes from './routes/superHeroRoutes.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware para JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Conexion a MongoDB
connectDB();

//Config de rutas
app.use('/api', superHeroRoutes);
/* app.use('/', landingRoutes); */



// EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

app.use(expressLayouts);
app.set('layout', 'layout'); // Ruta al layout principal  

//Servir archivos estaticos
/* app.use(express.static(path.resolve('/tp01/public'))); */
app.use(express.static(path.join(__dirname, 'public')));

//Ruta principal
app.get('/', (req, res) => {
    res.render('index', {       
        title: 'Pagina Principal',
        navbarLinks: [
            { text: 'Inicio', href: '/', icon: '/icons/home.svg' }, 
            { text: 'Lista de Superheroes', href: '/api/heroes', icon: '/icons/info.svg' }, 
            { text: 'Agregar Superheroes', href: '/api/formulario', icon: '/icons/contact.svg' } 
        ]
    });
});  

//Manejo de errores para rutas no encontradas
app.use((req, res) => {
    res.status(404).send({ mensaje: "Ruta no encontrada app.mjs"});
});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    
})