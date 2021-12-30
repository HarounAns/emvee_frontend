import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap'

export default function TeamExportModal({ team, isOpen, toggle }) {
    const [copied, setCopied] = useState(false);

    const formatEVs = (evconfigs) => {
        let list = [];
        for (const key in evconfigs) {
            if (!evconfigs[key]) continue;
            list.push(`${evconfigs[key]} ${key}`);
        }
        return list.join(' / ');
    }

    const getFormattedExport = () => {
        let list = [];
        for (const set of team) {
            const {
                pokemon,
                abilities,
                items,
                evconfigs,
                natures,
                moveslots
            } = set;

            const evsFormatted = formatEVs(evconfigs[0]);
            const template = `${pokemon} @ ${items[0]}
            Ability: ${abilities[0]}
            EVs: ${evsFormatted} 
            ${natures[0]} Nature
            - ${moveslots[0][0].move}
            - ${moveslots[1][0].move}
            - ${moveslots[2][0].move}
            - ${moveslots[3][0].move}
            `
            list.push(template);
        };
        return list.join('\n');
    }

    const formattedExport = getFormattedExport()

    const copyToClipboard = (formattedExport) => {
        navigator.clipboard.writeText(formattedExport)
        setCopied(true)

        setTimeout(() => setCopied(false), 3000);        
    }

    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>Export</ModalHeader>
                <ModalBody>
                    <Input type="textarea" name="text" rows="20" value={formattedExport} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => copyToClipboard(formattedExport)}>
                        {copied ? 'Copied!' : 'Copy'}
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
