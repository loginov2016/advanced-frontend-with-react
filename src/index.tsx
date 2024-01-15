import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import ThemeProvider from './theme/ThemeProvider';


const root = document.getElementById('root');
const container = createRoot(root);



container.render( 
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>        
    </BrowserRouter>
);

