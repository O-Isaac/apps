import { Quest, War } from '@atlasacademy/api-connector';
import { createContext, useState } from 'react';

interface useStatesMapWarProps { 
        warRoads: War.SpotRoad[]; 
        warSpots: War.Spot[];
}

export function useStatesMapWar({ warRoads, warSpots }: useStatesMapWarProps) {
        const [show, setShow] = useState<boolean>(false);
        const [quests, setQuests] = useState<Quest.Quest[]>([]);
        const [isLoaded, setIsLoaded] = useState<boolean>(true);
        
        const [roads] = useState<War.SpotRoad[]>(warRoads);
        const [spots, setSpots] = useState<War.Spot[]>(warSpots);

        return { setSpots, spots, roads, quests, setQuests, show, setShow, isLoaded, setIsLoaded };
}

interface WarMapQuestListContextProps {
        show: boolean;
        setShow: (show: boolean) => void;
        quests: Quest.Quest[];
        setQuests: (quests: Quest.Quest[]) => void;
        isLoaded: boolean;
        setIsLoaded: (isLoaded: boolean) => void;
        roads: War.SpotRoad[];
        spots: War.Spot[];
}

export default createContext<WarMapQuestListContextProps>({
        show: false,
        setShow: () => {},
        quests: [],
        setQuests: () => {},
        isLoaded: true,
        setIsLoaded: () => {},
        roads: [],
        spots: []
});