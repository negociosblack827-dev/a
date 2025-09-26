export default function AudioCreator() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-purple-300">Criar Áudio / Voz</h2>
      <input type="text" placeholder="Digite o texto..." className="w-full p-2 rounded mb-2 text-black"/>
      <button className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600 transition">Gerar Áudio</button>
      <div className="mt-4 p-4 bg-gray-700 rounded h-48 flex items-center justify-center text-gray-400">Preview do áudio</div>
    </div>
  )
}