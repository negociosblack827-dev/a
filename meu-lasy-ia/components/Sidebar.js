export default function Sidebar({ setActive }) {
  const buttons = [
    { label: 'Imagem / Vídeo', key: 'image-video' },
    { label: 'Áudio / Voz', key: 'audio' },
    { label: 'Clonar Site', key: 'clone' },
    { label: 'Criar Site/App', key: 'site' },
  ];
  return (
    <div className="w-64 bg-gray-900 p-6 flex flex-col transition-all duration-300">
      <h1 className="text-3xl font-bold mb-8 text-purple-400">Lasy IA</h1>
      {buttons.map(btn => (
        <button
          key={btn.key}
          onClick={() => setActive(btn.key)}
          className="mb-4 text-left px-3 py-2 rounded hover:bg-purple-700 transition-colors duration-300"
        >
          {btn.label}
        </button>
      ))}
    </div>
  )
}