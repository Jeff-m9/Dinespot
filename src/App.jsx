import Header from './components/Header';
import Footer from './components/Footer';

function App() {
return (
<div className="flex flex-col min-h-screen">
<Header />

<main className="flex-grow p-4">
<h2 className="text-2xl mb-4">Welcome to Dine Spot!</h2>
<p>Explore our diverse menu and reserve a table now.</p>
</main>

<Footer />
</div>
);
}

export default App