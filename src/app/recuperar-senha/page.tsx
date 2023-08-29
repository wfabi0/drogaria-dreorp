import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NotificationButton from "@/components/NotificationButton";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-800 text-black">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-8 bg-white shadow-md rounded-lg">
          <h2 className="text-[2rem] font-semibold mb-4">Recuperar Senha</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-[1.4rem] font-medium mb-1"
              >
                Email de acesso <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="nome"
                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                required
              />
            </div>
            <NotificationButton
              button="RECUPERAR SENHA"
              className="w-full bg-purple-700 text-white py-2 rounded-sm hover:bg-purple-800"
              title="Email de confirmação foi enviado, acesse para mais detalhes."
            />
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
