import React from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import { formatPokemonForSmogonGif } from '../helpers'


export default function TeamPreview({ team, history }) {
    const { teamDateTs, teamName, spotlightPokemon, pokepasteURL } = team
    const [year, month, day] = teamDateTs.split('T')[0].split('-')

    const formattedGifPokemon = formatPokemonForSmogonGif(spotlightPokemon)
    return (
        <Container style={{ cursor: 'pointer', marginTop: '10px' }}>
            <Card
                onClick={() => window.open(pokepasteURL, '_blank')}>
                <Row>
                    <Col>
                        <div style={{ width: "150px", height: "120px", marginTop: "20px", marginLeft: "30px" }}>
                            <img src={`https://play.pokemonshowdown.com/sprites/ani/${formattedGifPokemon}.gif`} alt={spotlightPokemon} />
                        </div>
                    </Col>
                    <Col>
                        <h4 style={{ marginTop: "25%" }}>
                            {teamName}
                        </h4>
                    </Col>
                    <Col>
                        <div style={{ marginTop: "27%" }}>
                            {`${month}/${day}/${year}`}
                        </div>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}
