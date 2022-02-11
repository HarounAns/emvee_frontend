import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Container, Spinner } from 'reactstrap'
import TeamPreview from '../Components/TeamPreview'
import { EMVEE_API_URL } from '../config'

const mediumGray = "rgb(55, 57, 62)";
export default function Home() {
    const [loading, setLoading] = useState(false)
    const [teams, setTeams] = useState([])
    const [nextKey, setTNextKey] = useState(null)

    const fetchTeams = async (key) => {
        const url = key ? `${EMVEE_API_URL}/teams?nextKey=${encodeURIComponent(JSON.stringify(key))}` : `${EMVEE_API_URL}/teams`;
        const res = await axios.get(url);

        const { Teams, nextKey } = res.data
        setTNextKey(nextKey)
        return Teams
    }

    const fetchTeamsNextPage = async () => {
        const teamData = await fetchTeams(nextKey)
        setTeams(teams => [...teams, ...teamData])
    }

    useEffect(() => {
        const loadInitialPage = async () => {
            setLoading(true);
            const teamData = await fetchTeams()
            setLoading(false);
            setTeams(teamData)
        }
        loadInitialPage()
    }, [])

    if (loading) {
        return <Spinner />
    }

    return (
        <Container style={{ maxWidth: "700px" }}>
            <div style={{ height: '75vh', overflowY: 'scroll' }}>
                {teams.map((team, i) => (
                    <TeamPreview key={i} team={team} />
                ))}
                {nextKey ? (
                    <Container onClick={fetchTeamsNextPage} style={{ marginTop: "5px", cursor: 'pointer' }}>
                        <Card style={{ backgroundColor: mediumGray }}>Load More</Card>
                    </Container>
                ) : (
                    <Container style={{ marginTop: "5px" }}>
                        <Card style={{ backgroundColor: mediumGray }}>All Teams Loaded</Card>
                    </Container>
                )
                }
            </div>
        </Container>
    )
}
