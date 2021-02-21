import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import notes from '../notes'

// function CreateNotes(myNotes) {
//     return (
//         <Note
//             key={myNotes.key} 
//             title={myNotes.title}
//             content={myNotes.content}
//         />
//     )
// }


function App() {
    return <div>
        <Header />
        {notes.map((myNotes) => 
        <Note
            key={myNotes.key} 
            title={myNotes.title}
            content={myNotes.content}
        />
        )}

        <Footer />
    </div> 
}

export default App