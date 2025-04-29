// app/page.tsx
import Hero from './components/Hero'
import Menu from './components/Menu'
import Eventi from './components/Eventi'
import Testimonial from './components/Testimonial'
import Story from './components/Story'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Story />
      <Menu />
      <Eventi />
      <Testimonial />
    </div>
  )
}