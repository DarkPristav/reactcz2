import "./AllTasks.css"
import data from "../data"
import { useState } from "react"

const AllTasks = () => {
    const [myTask, setMyTask] = useState(data)
    const allDeleteHandler = () => {
        setMyTask([])
    }
    const allHandler = () => {
        setMyTask(data)
    }
    const taskHandler = (idecko) => {
    const filteredTasks = myTask.filter((oneTask) => {
        return oneTask.id !== idecko
    })
    setMyTask(filteredTasks)
}
    return <div className="tasks-box">
        <div className="all-tasks">
            {
                myTask.map((oneTask) => {
                    const { id, name } = oneTask
                    return <div className="one-task" key={id}>
                        <h4>{name}</h4>
                        <button onClick={() => taskHandler(id)}>Vymazat</button>
                    </div>
                })
            }
        </div>
        <div className="delete-button">
            <button onClick={allDeleteHandler}>Vymazat všechny úkoly</button>
        </div>
        <div className="delete-button">
            <button onClick={allHandler}>Vrátit všechny úkoly</button>
        </div>
    </div>
}

export default AllTasks