import { Quest, War } from '@atlasacademy/api-connector';
import { createContext, useState } from 'react';
import Manager from "../Setting/Manager"

interface mapResourcesTypes {
        [key: string]: string[]
}

// Maps Resource
export const mapResources: mapResourcesTypes = {
        ccc: [
                `https://static.atlasacademy.io/${Manager.region()}/Terminal/QuestMap/Capter9010/MGE_901001_00.png`,
                `https://static.atlasacademy.io/${Manager.region()}/Terminal/QuestMap/Capter9010/MGE_901003_00.png`,
                `https://static.atlasacademy.io/${Manager.region()}/Terminal/QuestMap/Capter9010/MGE_901008_00.png`,
        ]
}

// Map War Resources
export const mapResurcesId = {
        ccc: [
                9010,
                9053,
                9088
        ]
}

interface useStatesMapWarProps { 
        warRoads: War.SpotRoad[]; 
        warSpots: War.Spot[];
        defaultQuestType?: Quest.QuestType;
}

// This hook provide a defaults options states for context provider
export function useStatesMapWar({ warRoads, warSpots, defaultQuestType = Quest.QuestType.FREE }: useStatesMapWarProps) {
        const [show, setShow] = useState<boolean>(false);
        const [isLoaded, setIsLoaded] = useState<boolean>(true);
        const [showName, setShowName] = useState<boolean>(true);
        const [showRoads, setShowRoads] = useState<boolean>(false);
        
        const [lastIDspotCliked, setLastIDspotCliked] = useState<string>('0');

        const [roads] = useState<War.SpotRoad[]>(warRoads);
        const [spots, setSpots] = useState<War.Spot[]>(warSpots);
        const [quests, setQuests] = useState<Quest.Quest[]>([]);
        const [questType, setSetTypeQuest] = useState<Quest.QuestType>(defaultQuestType);

        return { 
                lastIDspotCliked,
                setLastIDspotCliked,
                roads, 
                setSpots, 
                spots, 
                setQuests,  
                quests,
                setShow, 
                show,
                setIsLoaded,
                isLoaded,
                setShowName,
                showName,
                showRoads,
                setShowRoads,
                questType,
                setSetTypeQuest
        };
}

interface WarMapQuestListContextProps {
        show: boolean;
        setShow: (show: boolean) => void;
        quests: Quest.Quest[];
        setQuests: (quests: Quest.Quest[]) => void;
        isLoaded: boolean;
        setIsLoaded: (isLoaded: boolean) => void;
        showName: boolean;
        setShowName: (showName: boolean) => void;
        roads: War.SpotRoad[];
        spots: War.Spot[];
        setSpots: (spots: War.Spot[]) => void;
        showRoads: boolean;
        setShowRoads: (showRoads: boolean) => void;
        lastIDspotCliked: string;
        setLastIDspotCliked: (lastIDspotCliked: string) => void;
        questType: Quest.QuestType;
        setSetTypeQuest: (questType: Quest.QuestType) => void;
}

export default createContext<WarMapQuestListContextProps>({
        show: false,
        setShow: () => {},
        quests: [],
        setQuests: () => {},
        showName: false,
        setShowName: () => {},
        isLoaded: true,
        setIsLoaded: () => {},
        roads: [],
        setSpots: () => {},
        spots: [],
        setShowRoads: () => {},
        showRoads: false,
        lastIDspotCliked: '',
        setLastIDspotCliked: () => {},
        questType: Quest.QuestType.FREE,
        setSetTypeQuest: () => {}
});