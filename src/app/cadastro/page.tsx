import Navbar from "@/components/Navbar";

export default function Cadastro() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-800 text-black">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-8 bg-white shadow-md rounded-lg">
          <h2 className="text-[2rem] font-semibold mb-4">
            Cadastro de Informações
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="nome"
                className="block text-[1.4rem] font-medium mb-1"
              >
                Nome Completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nome"
                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                required
              />
            </div>
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
                htmlFor="telefone"
                className="block text-[1.4rem] font-medium mb-1"
              >
                Telefone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="telefone"
                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="endereco"
                className="block text-[1.4rem] font-medium mb-1"
              >
                Endereço <span className="text-red-500">*</span>
              </label>
              <textarea
                id="endereco"
                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-[1.1rem] font-medium">
                <input type="checkbox" className="mr-1" required />
                Eu concordo com os termos
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded-sm hover:bg-purple-800"
            >
              Enviar Cadastro
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
