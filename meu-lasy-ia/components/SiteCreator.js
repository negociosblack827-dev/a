import { useEffect, useRef } from 'react'
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import presetWebpage from 'grapesjs-preset-webpage'

export default function SiteCreator() {
  const editorRef = useRef(null)
  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = grapesjs.init({
        container: '#gjs',
        height: '600px',
        width: '100%',
        fromElement: false,
        storageManager: { type: null },
        plugins: [presetWebpage],
        pluginsOpts: { presetWebpage: {} },
        canvas: { styles: ['https://unpkg.com/tailwindcss@^3.0/dist/tailwind.min.css'] }
      })
    }
  }, [])
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-purple-300">Criar Site/App</h2>
      <p className="mb-4">A IA irá gerar um site completo que você pode editar abaixo:</p>
      <div id="gjs" className="bg-gray-700 rounded"></div>
    </div>
  )
}