/*
 * Copyright (c) ADeepTech
 * Licensed under the MIT license
 * https://github.com/ADeepTech/Full-Stack-pre-assessment/blob/master/LICENSE
 * @author AndyNgKM
 */
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { getCards } from "../../../store/selectors/appSelectors"
import { setCardNumber } from "../../../store/actions/app"
import { BoardResult } from "./Panel/BoardResult"
import { Ticket } from "./Panel/Ticket"

const Product: React.FC = () => {
    const dispatch = useDispatch()
    const cards = useSelector(getCards)

    const updateCardNumber = (cardType: string) => {
        dispatch(
            setCardNumber({
                cardType: cardType,
                number: 2
            })
        )
    }

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
                                <Ticket name="SILVER" />
                                <Ticket name="GOLD" />
                                <Ticket name="DIAMOND" />
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
