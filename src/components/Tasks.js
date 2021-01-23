const tasks = [
    {
        id:1,
        text: 'hello world',
        day : 'Feb 5th at 2:30pm',
        reminder:false,
    },
    {
        id:2,
        text: 'lorem ipsum',
        day : 'Feb 5th at 2:30pm',
        reminder:true,
    },
    {
        id:3,
        text: 'ds dfd',
        day : 'Feb 5th at 2:30pm',
        reminder:false,
    }
]

const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
