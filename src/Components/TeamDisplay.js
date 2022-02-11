import React from 'react'
import { Container, Row, Col, Card, Button } from 'reactstrap'
import { formatPokemonForSmogonGif } from '../helpers'

const mediumGray = "rgb(55, 57, 62)";

export default function TeamDisplay({ team }) {
    function PokemonCard(i) {
        const moveset = team[i];
        const {
            pokemon,
            abilities,
            moveslots,
            items,
        } = moveset;

        console.log('moveslots[0]');
        console.log(moveslots[0]);

        const formattedGifPokemon = formatPokemonForSmogonGif(pokemon)

        return (
            <Container style={{ marginTop: "20px" }}>
                <Card style={{ backgroundColor: mediumGray }}>
                    <Row style={{ marginTop: "15px", marginLeft: "35px" }}>
                        <Col>
                            <div style={{ width: "150px", height: "120px", marginTop: "20px", marginLeft: "30px" }}>
                                <img src={`https://play.pokemonshowdown.com/sprites/ani/${formattedGifPokemon}.gif`} alt={pokemon} />
                            </div>
                        </Col>
                        <Col>
                            <Row><Button style={styles.aboutButton} color="danger"><strong>{pokemon}</strong></Button></Row>
                            <Row><Button style={styles.aboutButton} color="danger">{items[0]}</Button></Row>
                            <Row><Button style={styles.aboutButton} color="danger">{abilities[0]}</Button></Row>
                        </Col>
                    </Row>
                    <Row style={{ margin: "10px 70px" }}>
                        <Col><Button style={styles.moveButton} color="primary">{moveslots[0][0].move}</Button></Col>
                        <Col><Button style={styles.moveButton} color="primary">{moveslots[0][1].move}</Button></Col>
                        <Col><Button style={styles.moveButton} color="primary">{moveslots[0][2].move}</Button></Col>
                        <Col><Button style={styles.moveButton} color="primary">{moveslots[0][3].move}</Button></Col>
                    </Row>
                </Card>
            </Container >
        )
    }

    return (
        <Container style={{ marginBottom: "30px" }}>
            <Row>
                <Col>{PokemonCard(0)}</Col>
                <Col>{PokemonCard(1)}</Col>
            </Row>
            <Row>
                <Col>{PokemonCard(2)}</Col>
                <Col>{PokemonCard(3)}</Col>
            </Row>
            <Row>
                <Col>{PokemonCard(4)}</Col>
                <Col>{PokemonCard(5)}</Col>
            </Row>
        </Container>
    )
}

const styles = {
    moveButton: {
        width: "150px",
        marginTop: "10px"
    },
    aboutButton: {
        width: "80%",
        marginTop: "5px"
    }
}