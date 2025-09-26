import { useState } from 'react'
export default function ImageVideoCreator() {
  const [tab, setTab] = useState('texto')
  return (
    <div className="bg-gray-800 p-6 rounded-lg space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-purple-300">Criar Imagem / Vídeo</h2>
      <div className="flex space-x-4 mb-4">
        <button onClick={() => setTab('texto')} className={`px-4 py-2 rounded ${tab==='texto' ? 'bg-purple-500' : 'bg-gray-700'}`}>Texto</button>
        <button onClick={() => setTab('foto')} className={`px-4 py-2 rounded ${tab==='foto' ? 'bg-purple-500' : 'bg-gray-700'}`}>Foto</button>
      </div>
      {tab === 'texto' && (
        <div>
          <input type="text" placeholder="Digite seu prompt..." className="w-full p-2 rounded mb-2 text-black"/>
          <button className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600 transition">Gerar</button>
        </div>
      )}
      {tab === 'foto' && (
        <div>
          <input type="file" className="mb-2"/>
          <button className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600 transition">Gerar</button>
        </div>
      )}
      <div className="mt-4 p-4 bg-gray-700 rounded h-64 flex items-center justify-center text-gray-400">
        Preview do conteúdo gerado aparecerá aqui
      </div>
    </div>
  )
}