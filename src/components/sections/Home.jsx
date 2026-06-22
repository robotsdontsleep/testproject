import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Main from "../ui/Main";

function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
