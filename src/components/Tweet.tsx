export function Tweet(props){
    console.log(props)
    return(
        <>
            <strong>{props.user}</strong>
            <p>{props.content}</p>
            <button>Like</button>
        </>
    )
}
