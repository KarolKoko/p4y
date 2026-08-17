import React from 'react'
import Hero from './organisms/Hero'
import HowItWorks from './organisms/HowItWorks'
import Contact from './organisms/Contact'

const App: React.FC = () => {

    return (
        <>
            <main>
                <Hero />
                <HowItWorks />
                <Contact />
            </main>
        </>
    )
}

export default App
