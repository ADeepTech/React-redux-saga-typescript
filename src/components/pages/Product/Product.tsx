/*
 * Copyright (c) ADeepTech
 * Licensed under the MIT license
 * https://github.com/ADeepTech/React-Redux-Typescript/blob/main/LICENSE
 * @author AndyNgKM
 */
import React from "react"
import { useSelector } from "react-redux"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { getCards } from "../../../store/selectors/appSelectors"
import BoardResult from "./Panel/BoardResult"
import Ticket from "./Panel/Ticket"
import { CARD_TYPES } from "./Panel/ItemTypes"

const Product: React.FC = () => {
    const cards = useSelector(getCards)

    return (
        <Container>
            <DndProvider backend={HTML5Backend}>
                <Row>
                    <Col xs={4}>
                        <Card>
                            <Card.Header style={{ display: "flex" }}>
                                <h5 style={{ alignItems: "flex-start", flex: "1" }}>Get More Tickets</h5>
                                <Button style={{ alignItems: "flex-end" }}>Buy</Button>
                            </Card.Header>
                            <Card.Body>
                                {CARD_TYPES.map((val, index) => {
                                    return (
                                        <Ticket
                                            key={index}
                                            name={val}
                                            numberOfTickets={cards[val] ? cards[val].number : 0}
                                        />
                                    )
                                })}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={8}>
                        <Card>
                            <Card.Body>
                                <BoardResult />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </DndProvider>
        </Container>
    )
}
export default Product
