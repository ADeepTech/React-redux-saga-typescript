import { CSSProperties, FC } from "react"
import { useDrag } from "react-dnd"
import { ItemTypes } from "./ItemTypes"

const style: CSSProperties = {
    width: '100%',
    border: "1px dashed gray",
    backgroundColor: "white",
    padding: "0.5rem 1rem",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
    cursor: "move",
    float: "left",
}

export interface TicketProps {
    name: string
}

interface DropResult {
    name: string
}

export const Ticket: FC<TicketProps> = function Ticket({ name }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.TICKET,
        item: { name },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult<DropResult>()
            if (item && dropResult) {
                alert(`You dropped ${item.name} into ${dropResult.name}!`)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))

    const opacity = isDragging ? 0.4 : 1
    return (
        <div ref={drag} role="Ticket" style={{ ...style, opacity }} data-testid={`Ticket-${name}`}>
            {name}
        </div>
    )
}
