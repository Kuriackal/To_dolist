import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../Home/Home.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-regular-svg-icons';



const Home = () => {

  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

    const navigate=useNavigate();
    useEffect(() => {
    const token =localStorage.getItem('Token')
    if(!token)
    {
        navigate('/')
    }
      
    }, [])


 

  const handleAddTodo = () => {
    if (toDo.trim() !== '') {
      setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setToDo('');
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = toDos.filter((todo) => todo.id !== id);
    setToDos(updatedTodos);
  };
    
  return (
    <div   style={{backgroundColor:" #fff5d7",margin: 0,padding:0}}>
      <nav className="navbar" style={{backgroundColor:"#080D51"}}>
  <div className="container-fluid">
    <a className="navbar-brand" style={{color:"#FFFF",fontFamily: "Times New Roman"}}>To_DO_List</a>
    <form className="d-flex">
   
        <i className="bi bi-person-circle px-2" style={{ color: "white" }} ><span className='px-2' style={{color:"#FFFF"}}>{localStorage.getItem('Name')}</span></i>
      <button className="btn btn-danger" type="submit"  style={{ color: "#FFFF" }} onClick={()=>{
        localStorage.clear(); navigate('/')
        
      }}>Logout</button>
    </form>
  </div>
</nav>

<div className='container d-flex flex-column align-items-center justify-content-center min-vh-100'
>
<div className="subHeading">
        <br />
        <h2 style={{fontFamily:"Times New Roman"}}>Add Your task for the dayyy...... 🌝 </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
          className='border border-primary rounded '
          style={{ width: "300px",height:"50px",fontFamily:"Times New Roman"}}
        />
        <i style={{color:"green",cursor:"pointer"}}  onClick={handleAddTodo} className="fas fa-plus  p-2"></i>
      </div>
      <div className="todos " >
        {toDos.map((obj) => {
          return (
            <div className="todo " key={obj.id} style={{ display: "flex", flexDirection: "row", alignItems: "left" ,justifyContent:"space-between" }}>
              <div className="left " style={{display: "flex" }}>
                <div><input
                  onChange={(e) => {
                    setToDos((prevTodos) =>
                      prevTodos.map((todo) =>
                        todo.id === obj.id
                          ? { ...todo, status: e.target.checked }
                          : todo
                      )
                    );
                  }}
                  checked={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                </div>
                <div style={{paddingLeft:"10px" }}>
                <p>{obj.text}</p>
                </div>
              </div>
              <div className="right ">
                <i style={{color:"red",cursor:"pointer"}}
                  onClick={() => handleDeleteTodo(obj.id)}
                  className="fa-solid fa-trash ">
                    
                </i>
              </div>
            </div>
          );
        })}
        <br />
        <h1 style={{fontFamily:"Times New Roman"}} >Task Completed</h1>
        {toDos
          .filter((obj) => obj.status)
          .map((obj) => (
            <h1 key={obj.id} style={{fontFamily:"Times New Roman"}}>{obj.text}</h1>
          ))}
      </div>

</div>
     
    </div>
  )
}

export default Home
