import React from 'react'
import KcButton from '../../components/KClicker/KcButton'

import './KClicker.css';

function KClicker() {
  return (
    <>
      <main>
        <section className='app'>
          <div className='cosiki'>

          </div>
          <div className='points'>

          </div>
          <div className='shop'>

          </div>
          <div className='click'>
            <KcButton />
          </div>
        </section>
      </main>
    </>
  )
}

export default KClicker