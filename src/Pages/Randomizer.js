import React, { useState } from 'react'
import { Button, Spinner } from 'reactstrap'
import axios from 'axios'
import TeamDisplay from '../Components/TeamDisplay'
import TeamExportModal from '../Components/TeamExportModal';

const randomTeamAPIURL = 'https://aim.pokerandomizer.xyz/gen/SS/OU/Heat';

export default function Randomizer() {
    const [team, setTeam] = useState([])
    const [loadingTeam, setLoadingTeam] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const randomize = async () => {
        setLoadingTeam(true);
        const res = await axios.get(randomTeamAPIURL);

        let list = [];
        for (const pokemon of res.data) {
            list.push(pokemon.setFormats[0].movesets[0]);
            if (list.length >= 6) break;
        }

        setLoadingTeam(false);
        setTeam(list);
    }

    return (
        <div>
            <h4>RANDOM POKÉMON HEAT GENERATOR</h4>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row"
            }}>
                <Button
                    style={{ width: "107px" }}
                    disabled={loadingTeam}
                    color="primary"
                    onClick={randomize}>
                    {!loadingTeam ? 'Randomize' : <Spinner />}
                </Button>

                {Boolean(team.length) && (
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        style={{ width: "107px", marginLeft: "5px" }}
                        color="danger">
                        Export
                    </Button>
                )}
            </div>
            {Boolean(team.length) && <TeamDisplay team={team} />}
            <TeamExportModal team={team} isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)} />
        </div>
    )
}
