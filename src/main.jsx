import { createRoot } from 'react-dom/client';
//import './index.css';


function Header(){
  return(
    <header>
      <img src="react-logo.png" className="nav-logo" alt="React Logo" />
      <nav>
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function Main(){
  return(
    <main>
      <h1>Reasons I am excited to learn React</h1>
      <ol>
        <li>React is a popular library, so I will be able to fit in with all the coolest devs out there</li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </main>
  )
}

function Footer(){
  return(
    <footer>
      <small>2024 Ziroll Development. All rights reserved.</small>
    </footer>
  )
}


createRoot(document.getElementById('root')).render(
  <>
    <Header/>
    <Main/>
    <Footer/>
  </>
)
