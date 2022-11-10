import Navbar from "./components/Navbar/Navbar";
import GymList from "./components/GymList/GymList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Header />
        <GymList />
      </main>
      <Footer />
    </>
  );
}

export default App;
