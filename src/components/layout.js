import React from "react"
import Sidebar from './sidebar'
import '../style/layout.scss'


export default ({ children }) => (
  <div>
    <Sidebar/>
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    
    {children}
    </div>
  </div>

)