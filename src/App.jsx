import React, { useState } from 'react';
import Head from "./components/Head";
import Create from "./components/Create";
import Show from "./components/Show"
import Host from "./components/Host"
import Upper from "./components/Upper";
import Input from "./components/Input";
const App = () => {

  const [tasks, setTasks] = useState([]);
 
  return (
    <div className='h-screen w-screen  flex items-center justify-center'>
      <div className='h-[35vw] w-[28vw]  bg-gray-400 '>
      <Head tasks={tasks} />
      <Create tasks={tasks} setTasks={setTasks}/>
      <Show tasks={tasks} setTasks={setTasks}/>
      <Host info="This is real info">
       
      </Host>
      
      </div>
    </div>
  )
}

export default App;
