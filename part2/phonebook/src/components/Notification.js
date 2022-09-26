const Notification = ({ notification }) => {
    if (notification === null)
        return null
    if (notification.isError)
        return (
            <div style={warning}>{notification.message}</div>
        )
    return (
        <div style={confirmation}>{notification.message}</div>
    )
}

const confirmation = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
}

const warning = { ...confirmation, color: 'red' }


export default Notification