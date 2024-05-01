import { React, useEffect, useState } from 'react'
import "./App.css"

export default function App() {
  const [dirty, setDirty] = useState(false)
  const [newEntry, setNewEntry] = useState({ username: "", entry: "", })
  const [entries, setEntries] = useState([
    // {
    //   username: "Wired0",
    //   entry: "Kept me informed on current social issues that involved technology"
    // }, {
    //   username: "Wired1",
    //   entry: "Kept me informed on current social issues that involved technology"
    // }, {
    //   username: "Wired2",
    //   entry: "Kept me informed on current social issues that involved technology"
    // },
  ])

  const addEntry = (newItem) => {
    setEntries([...entries, newItem])
  }

  function handleSubmit(newItem) {
    if (newItem.username === "") return
    addEntry(newItem)
    setNewEntry({ username: "", entry: "", })
    document.getElementById("newUsername").value = ""
    document.getElementById("newEntry").value = ""
  }

  function deleteEntry(index) {
    setDirty(!dirty)
    entries.splice(index, 1)
    setEntries(entries)
  }

  useEffect(() => { })

  return (
    <>
      <h1>Journal Entries</h1>
      <div className='Journal Entries'>
        {entries.map((val, i) => (
          < div className='row' key={val.title}>
            <div className='column left'>
              <button onClick={() => deleteEntry(i)}>Delete</button>
            </div>
            <div className='column right'>
              <table><tbody >
                <tr key={val.username}><td>username</td><td>:</td><td>{val.username}</td></tr>
                <tr key={val.entry}><td>entry</td><td>:</td><td>{val.entry}</td></tr>
              </tbody></table>
            </div>
          </div>
        ))
        }
      </div>
      <h2>Suggestions to add?</h2>
      <div onSubmit={e => e.target.value = ""}>
        <p>username: <input id='newUsername'
          onChange={e => setNewEntry({ ...newEntry, "username": e.target.value })}
          type="text" /></p>
        <p>entry: <input id='newEntry'
          onChange={e => setNewEntry({ ...newEntry, "entry": e.target.value })}
          type="text" /></p>
        <button onClick={() => { handleSubmit(newEntry) }}
          className="btn">Add</button>
      </div>
    </>
  )
}