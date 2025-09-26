import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ImageVideoCreator from '../components/ImageVideoCreator'
import AudioCreator from '../components/AudioCreator'
import SiteCloner from '../components/SiteCloner'
import SiteCreator from '../components/SiteCreator'

export default function Home() {
  const [active, setActive] = useState('image-video')
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar setActive={setActive} />
      <div className="flex-1 p-6 overflow-auto">
        {active === 'image-video' && <ImageVideoCreator />}
        {active === 'audio' && <AudioCreator />}
        {active === 'clone' && <SiteCloner />}
        {active === 'site' && <SiteCreator />}
      </div>
    </div>
  )
}