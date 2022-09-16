const Result = ({ name, showClicked }) => {
    return (
        <>
            {name}<button onClick={() => showClicked(name)}>show</button>
        </>
    )
}

export default Result