const Header = ({ name }) => <h1>{name}</h1>

const Part = ({ part }) =>
    <p>
        {part.name} {part.exercises}
    </p>

const Content = ({ parts }) =>
    <>
        <ul>
            {parts.map(part =>
                <Part part={part} key={part.id}></Part>)
            }
            <b><Total parts={parts}></Total></b>
        </ul>
    </>

const Total = ({ parts }) =>
    <p>
        Total of {parts.reduce((s, part) => s + part.exercises, 0)} exercises
    </p>

const Course = ({ course }) => {
    const parts = course.parts
    const name = course.name

    return (
        <div>
            <Header name={name}></Header>
            <Content parts={parts}></Content>
        </div>
    )
}

export default Course