export default function Price({oldPrice, newPrice}) {
    let oldStyles = {
        textDecorationLine: "line-through",
        opacity: 0.7,
    }
    return (
        <div>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span>{newPrice}</span>
        </div>
    );
}