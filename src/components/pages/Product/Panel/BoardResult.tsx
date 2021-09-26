import { CSSProperties, FC } from "react"
import { useDrop } from "react-dnd"
import { ItemTypes } from "./ItemTypes"

const style: CSSProperties = {
    height: "12rem",
    width: "12rem",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
    color: "white",
    padding: "1rem",
    textAlign: "center",
    fontSize: "1rem",
    lineHeight: "normal",
    float: "left",
}

const BoardResult: FC = () => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.TICKET,
        drop: () => ({ name: "BoardResult" }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    const isActive = canDrop && isOver
    let backgroundColor = "#222"
    if (isActive) {
        backgroundColor = "darkgreen"
    } else if (canDrop) {
        backgroundColor = "darkkhaki"
    }

    return (
        <div ref={drop} role={"BoardResult"} style={{ ...style, backgroundColor }}>
            {isActive ? "Release to drop" : "Drag a box here"}
        </div>
    )
}
export default BoardResult
