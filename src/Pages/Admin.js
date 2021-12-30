import React, { useEffect, useState } from 'react'
import LoginPage from '../Components/LoginPage'
import {
    Button,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Spinner
} from 'reactstrap'
import axios from 'axios'
import { EMVEE_API_URL } from '../config'

export default function Admin() {
    const [unlocked, setUnlocked] = useState(false)

    // used for form
    const [teamName, setTeamName] = useState('')
    const [teamDateTs, setTeamDateTs] = useState(new Date().toISOString())
    const [pokepasteURL, setPokepasteURL] = useState('')
    const [spotlightPokemon, setSpotlightPokemon] = useState('')
    const [invalidTeam, setInvalidTeam] = useState(false)
    const [createSuccessful, setCreateSuccessful] = useState(false)
    const [pokepasteData, setPokepasteData] = useState(null)
    const [pokepasteDataLoading, setPokepasteDataLoading] = useState(false)

    useEffect(() => {
        if (createSuccessful) {
            setTimeout(() => {
                setCreateSuccessful(false)
            }, 3000);
        }
    }, [createSuccessful])

    if (!unlocked) {
        return <LoginPage setUnlocked={setUnlocked} />
    }

    const handleChange = async (e) => {
        setInvalidTeam(false);

        const { name, value } = e.target;
        switch (name) {
            case 'teamName':
                setTeamName(value)
                break;
            case 'pokepasteURL':
                await getPokePasteData(value);
                break;
            case 'teamDateTs':
                // convert to iso string
                setTeamDateTs(new Date(value).toISOString());
                break;
            case 'spotlightPokemon':
                console.log(value)
                setSpotlightPokemon(value)
                break;
            default:
                console.log(`Invalid form input ${name}`)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()

        if (!pokepasteURL || !teamDateTs || !teamName || !spotlightPokemon) {
            setInvalidTeam(true)
            return
        }

        const data = {
            pokepasteURL,
            teamDateTs,
            teamName,
            spotlightPokemon
        }

        await createTeam(data)
        resetForm()
        setCreateSuccessful(true)
    }

    const getPokePasteData = async (pokepasteURL) => {
        setPokepasteURL(pokepasteURL)
        setPokepasteDataLoading(true)

        const res = await axios.get(`${pokepasteURL}/json`)
        setPokepasteDataLoading(false)

        if (!res || !res.data)
            return;

        const { paste, title } = res.data
        setTeamName(title)

        // get pokemon from paste
        let blocks = paste.split('\n\r');
        let pokemon = [];

        for (const block of blocks) {
            pokemon.push(block.split('@')[0].trim());
        }

        setPokepasteData({ pokemon })
        setSpotlightPokemon(pokemon[0])
    }

    const createTeam = async (data) => {
        await axios.post(EMVEE_API_URL, data);
    }

    const resetForm = () => {
        setTeamName('')
        setTeamDateTs(new Date().toISOString())
        setPokepasteURL('')
        setSpotlightPokemon('')
        setInvalidTeam(false)
        setPokepasteData(null)
        setPokepasteDataLoading(false)
    }

    return (
        <Container>
            {createSuccessful && <p style={{ color: 'green' }}>Successfully Created Team</p>}
            <Form className="form" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="pokepasteURL">PokePaste URL</Label>
                    <Input
                        onChange={handleChange}
                        type="text"
                        name="pokepasteURL"
                        id="pokepasteURL"
                        value={pokepasteURL}
                    />
                </FormGroup>
                {pokepasteDataLoading && <Spinner />}
                {
                    pokepasteData && (
                        <>
                            <FormGroup>
                                <Label for="teamName">Team Name</Label>
                                <Input
                                    onChange={handleChange}
                                    type="text"
                                    name="teamName"
                                    id="teamName"
                                    value={teamName}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="spotlightPokemon">Spotlight Pokemon</Label>
                                <Input
                                    onChange={handleChange}
                                    type="select"
                                    name="spotlightPokemon"
                                    id="spotlightPokemon"
                                >
                                    {pokepasteData.pokemon.map(pk => <option>{pk}</option>)}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="teamDateTs">Team Date</Label>
                                <Input
                                    onChange={handleChange}
                                    type="date"
                                    name="teamDateTs"
                                    id="teamDateTs"
                                />
                            </FormGroup>
                            {invalidTeam && <p style={{ color: 'red' }}>Must Fill Out Entire Form</p>}
                            <Button>Submit</Button>
                        </>
                    )
                }
            </Form>
        </Container>
    );
}
