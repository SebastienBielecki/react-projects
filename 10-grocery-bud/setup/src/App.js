import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem("list")
  if (list) {
    return JSON.parse(list)
  }
  return []
}


function App() {

  const [item, setItem] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({type: null, msg: ""})
  const [edit, setEdit] = useState(false)
  console.log("render");

  useEffect(() => {
    console.log("useEffect called");
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (item.length > 0) {
      if (!edit) {
        const id = Math.floor(1000000*Math.random());
        const newItem = {
          name: item,
          id: id
        }
        setList([...list, newItem])
        setItem("");
        setAlert({type: "alert-success", msg:"item added to the list"})
        setTimeout(() => {
          setAlert({type: null, msg: ""})
        }, 3000);
      } else {
        const beforeEdit = list.find(el => el.id === edit)
        const index = list.findIndex(el => el === beforeEdit)
        let arr = list.slice()
        arr[index] = {name: item, id: edit}
        setList(arr)
        setEdit(false)
        setItem("")
        setAlert({type: "alert-success", msg:"Item succesfully edited"})
        setTimeout(() => {
          setAlert({type: null, msg: ""})
        }, 2000);
      }
    } else {
      setAlert({type: "alert-danger", msg:"Please Enter Value"})
      setTimeout(() => {
        setAlert({type: null, msg: ""})
      }, 2000);
    }
  }

  const modifyItem = (id) => {
    setItem(list.find(el => el.id === id).name)
    setEdit(list.find(el => el.id === id).id);
  }

  const deleteItem = (id) => {
    setList((list) => list.filter(el => el.id !== id))
    setAlert({type: "alert-danger", msg:"Item Removed"})
      setTimeout(() => {
        setAlert({type: null, msg: ""})
      }, 3000);
  }

  return <>
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.type && <Alert {...alert}/>}
        <h3>Grocery list</h3>
        <div className='form-control'>
          <input 
            type="text" 
            className='grocery' 
            placeholder="e.g. eggs..."
            value={item}
            onChange={(e) => setItem(e.target.value)}
            ></input>
          <button type="submit" className='submit-btn'>{!edit ? "Add": "Edit"}</button>
        </div>
      </form>
      <div className='grocery-container'>
        {list.map((el, index) => {
          return (
            <List 
              key={el.id}
              {...el}
              onDelete={deleteItem}
              onModify={modifyItem}
            />
          )
        })}
        {list.length !== 0 && <button className="clear-btn" onClick={() => setList([])}>clear items</button>}
      </div>
    </section>
  </>
}

export default App
