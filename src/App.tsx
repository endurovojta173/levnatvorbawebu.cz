import { useState } from 'react'

function App() {
  // Jednoduchý state pro ukázku
  const [zajem, setZajem] = useState(false)

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
      <h1>Levná Tvorba Webu</h1>
      <p>Ahoj, jsem student z MENDELU a tohle je můj první web v Reactu.</p>
      
      <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>Webové stránky</h3>
          <p>Rychlé, moderní, v Reactu.</p>
        </div>
      </div>

      <button 
        onClick={() => setZajem(!zajem)}
        style={{ marginTop: '2rem', padding: '10px 20px', cursor: 'pointer' }}
      >
        {zajem ? 'Díky za zájem! Ozvu se.' : 'Mám zájem o web'}
      </button>
    </div>
  )
}

export default App