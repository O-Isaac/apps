import { Quest } from '@atlasacademy/api-connector';
import { createContext, useState } from 'react';

export function useStatesMapWar() {
        const [show, setShow] = useState<boolean>(false);
        const [quests, setQuests] = useState<Quest.Quest[]>([]);

        return { quests, setQuests, show, setShow };
}

interface WarMapQuestListContextProps {
        show: boolean;
        setShow: (show: boolean) => void;
        quests: Quest.Quest[];
        setQuests: (quests: Quest.Quest[]) => void;
}

export default createContext<WarMapQuestListContextProps>({
        show: false,
        setShow: () => {},
        quests: [],
        setQuests: () => {},
});