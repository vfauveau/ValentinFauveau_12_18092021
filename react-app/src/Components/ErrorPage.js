import React from 'react'
import Sidebar from './Sidebar'

function ErrorPage() {
    return (
        <div className="App">
        <main>
            <Sidebar />
            <div className="content-main">
                <h1>404 La page que vous cherchez ne peut pas être trouvée, veuillez entrer un autre ID</h1>
            </div>
        </main>
    </div>
    )
}

export default ErrorPage
