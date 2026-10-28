

import './App.css'

function App() {


  return (
    <>
     <button className="btn sm:hidden" popoverTarget="my-megamenu-2">Menu</button>
<div className="megamenu max-sm:megamenu-vertical megamenu-wide p-2 border border-base-300" id="my-megamenu-2" popover="auto">
  <span className="megamenu-active"></span>

  <button popoverTarget="b1">One</button>
  <div id="b1" popover="auto">
    <ul className="menu menu-horizontal">
      <li><a>Enterprise</a></li>
      <li><a>CRM software</a></li>
      <li><a>Security</a></li>
      <li><a>Consulting</a></li>
    </ul>
  </div>

  <button popoverTarget="b2">Two</button>
  <div id="b2" popover="auto">
    <ul className="menu menu-horizontal">
      <li><a>AI infrastructure</a></li>
      <li><a>Image generation</a></li>
      <li><a>MCP servers</a></li>
    </ul>
  </div>

  <button popoverTarget="b3">Three</button>
  <div id="b3" popover="auto">
    <ul className="menu menu-horizontal">
      <li><a>Cloud computing</a></li>
      <li><a>Storage solutions</a></li>
      <li><a>Database services</a></li>
      <li><a>CDN performance</a></li>
    </ul>
  </div>
</div>
      
    </>
  )

}

export default App
