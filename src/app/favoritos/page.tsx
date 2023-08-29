import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function SignIn() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-800 text-white">
      <Navbar />
      <h1 className="flex justify-center items-center h-screen text-center text-[2rem]">
        Você precisa está logado para ver sua lista de favoritos.
      </h1>
      <Footer />
    </main>
  );
}
