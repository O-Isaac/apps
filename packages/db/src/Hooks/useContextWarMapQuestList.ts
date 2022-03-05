import { Quest } from '@atlasacademy/api-connector';
import { createContext, useState } from 'react';

export function useStatesMapWar() {
        const [show, setShow] = useState<boolean>(false);
        const [quests, setQuests] = useState<Quest.Quest[]>([]);
        const [ isLoaded, setIsLoaded ] = useState<boolean>(true);

        return { quests, setQuests, show, setShow, isLoaded, setIsLoaded };
}

interface WarMapQuestListContextProps {
        show: boolean;
        setShow: (show: boolean) => void;
        quests: Quest.Quest[];
        setQuests: (quests: Quest.Quest[]) => void;
        isLoaded: boolean;
        setIsLoaded: (isLoaded: boolean) => void;
}

export default createContext<WarMapQuestListContextProps>({
        show: false,
        setShow: () => {},
        quests: [],
        setQuests: () => {},
        isLoaded: true,
        setIsLoaded: () => {},
});