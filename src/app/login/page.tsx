import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-800 text-black">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-8 bg-white shadow-md rounded-lg">
          <h2 className="text-[2rem] font-semibold mb-4">Acessar Conta</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-[1.4rem] font-medium mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-[1.4rem] font-medium mb-1"
              >
                Senha <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                required
              />
            </div>
            <div className="mb-4">
              <Link href={"/recuperar-senha"} className="text-zinc-800">
                Esqueci minha senha
              </Link>
            </div>
            <div className="mb-4">
              <Link className="text-zinc-800" href={"/cadastro"}>
                Não possui uma conta? Clique aqui
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded-sm hover:bg-purple-800"
            >
              ACESSAR
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
