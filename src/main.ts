import './style.css'
import { setupCounter } from './counter.ts'
// import './topics/01-basic-types.ts';

import './topics/11-opcional-chaining.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hola mundo!
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
