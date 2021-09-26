import { CSSProperties, FC } from "react"
import { useDispatch } from "react-redux"
import { useDrag } from "react-dnd"
import { setCardNumber } from "../../../../store/actions/app"
import { ItemTypes } from "./ItemTypes"

const style: CSSProperties = {
    width: "100%",
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
    numberOfTickets: number
}

interface DropResult {
    name: string
}

const Ticket: FC<TicketProps> = function Ticket({ name, numberOfTickets }: TicketProps) {
    const dispatch = useDispatch()

    const updateCardNumber = (cardType: string) => {
        if (typeof numberOfTickets === undefined) {
            numberOfTickets = 0
        }
        dispatch(
            setCardNumber({
                cardType: cardType,
                number: --numberOfTickets,
            })
        )
    }

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.TICKET,
        item: { name },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult<DropResult>()
            if (item && dropResult) {
                updateCardNumber(item.name)
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
            {name} - {numberOfTickets}
        </div>
    )
}
export default Ticket
