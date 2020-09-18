import React from "react"

import './default-layout.scss';

const Layout = ({ children }) => (
    <div className="c-default-layout">
        <h1>Gatsby Product Roadmap Theme</h1>
        {children}
    </div>
)

export default Layout