import { War, Quest, Region } from "@atlasacademy/api-connector";
import "./MapWar.css";
import { Tab, Tabs } from 'react-bootstrap';
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext, useMemo } from "react";
import WarMapContext, { useStatesMapWar } from "../Hooks/useContextWarMapQuestList"

const MAP_HIDDEN = [
    30502, // LB 5, map wihtout spot and blue background
]

const CCC = [
    "https://static.atlasacademy.io/NA/Terminal/QuestMap/Capter9010/MGE_901001_00.png",
    "https://static.atlasacademy.io/NA/Terminal/QuestMap/Capter9010/MGE_901003_00.png",
    "https://static.atlasacademy.io/NA/Terminal/QuestMap/Capter9010/MGE_901008_00.png",
]

const CCCWarsId = [
    9010,
    9053,
]


interface QuestListRenderProps { 
    quests: Quest.Quest[], 
    region: Region,
}

const QuestListRender = ({ quests, region }: QuestListRenderProps) => {
    return (
        <>
            <div className="war-questList">
                {quests && quests.map((quest, i) => (
                    <Link key={i} to={`/${region}/quest/${quest.id}`}>
                        <div>
                            <FontAwesomeIcon icon={faRightToBracket} /> {quest.name}
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
};

interface SpotImageProps {
    spot: War.Spot;
    type: Quest.QuestType;
}

const SpotImage = (props: SpotImageProps) => {
    const { spot, type } = props;
    const { setShow, show, setQuests } = useContext(WarMapContext);
    
    const NameSpot = () => (
        <div 
                id="spot-group"
                style={{
                    top: spot.y + spot.questOfsY + spot.nameOfsY + 100,
                    left: spot.x - spot.questOfsX + spot.nameOfsX - 50,
                    height: "auto",
                    color: "white",
                    position: "absolute",
                    textShadow: "4px 4px black",
                    background: "#000000bf",
                    borderRadius: "1rem",
                    width: "auto",
                    minWidth: "200px",
                    textAlign: "center",
                    zoom: .578   
                }}
                >
                {spot.name}
        </div>
    )
    
    // Prevent Rerendering
    const SpotImageMemorized = useMemo(() => {
        const spotStyle = {
            top: spot.y + spot.questOfsY + spot.nameOfsY - 20,
            left: spot.x - spot.questOfsX + spot.nameOfsX - 20,
            zIndex: "2",
        }
        
        return (
            <img 
                id={String(spot.id)}
                alt={spot.name} 
                src={spot.image} 
                className="map-war-spot" 
                style={spotStyle}
            />
        )
    }, [spot]);

    const handlerClick = () => {
        setQuests(spot.quests.filter(quest => quest.type === type));
        setShow(!show);
    }
    
    return (
       <>
       <div onClick={handlerClick}>
            {SpotImageMemorized}
            <NameSpot />
       </div>
       </>
    )
}

interface SpotImagesProps { 
    spots: War.Spot[]
    type: Quest.QuestType;
}

const SpotImages = (props: SpotImagesProps) => {
    const { spots, type } = props;

    return (
        <>
            {spots.map((spot, i) => (
                <SpotImage type={type} key={i} spot={spot} />
            ))}
        </>
    )
}

interface RenderSpotsProps {
    spots: War.Spot[];
    mapId: number;
    type: Quest.QuestType;
    region: Region
}


const RenderSpots = (props: RenderSpotsProps) => {
    const { spots, mapId, type } = props;
    
    // const { setShow, show, setQuests } = useContext(WarMapContext);

    const spotFiltered = spots
        .filter(spot => spot.mapId === mapId && spot.x < 99999 && spot.y < 99999)
        .filter((spot) => {

            const QuestTypeFound = spot.quests.find(q => q.type === type);
            
            if(QuestTypeFound) return true;

            return false;
        })

    if(spotFiltered.length === 0) {
        return (
            <div className="war-warn">
                No has {type.toUpperCase()} QUEST
            </div>
        )
    }

    return (
        <div className="map-war-spots">
            <SpotImages type={type} spots={spotFiltered} />
        </div>
    );
};

interface RenderMapProps {
    children: JSX.Element | JSX.Element[];
    image: string | undefined;
    height: number,
    width: number,
}

const RenderMap = (props: RenderMapProps) => {
    const { children, image, height, width } = props;
    const { setIsLoaded } = useContext(WarMapContext);

    return (
        <figure className="map-war">
            <img 
            onError={() => {
                setIsLoaded(false)
            }}
            style={{ zoom: 0.578 }} height={height + 'px'} width={width + 'px'} src={image} alt="map" />
            {children}
        </figure>
    );
}

interface MapWarProps {
    war: War.War;
    region: Region;
}

export default function MapWar({ war, region }: MapWarProps) {
    const mapsFiltered = war.maps.filter((map) => !MAP_HIDDEN.includes(map.id));
    const { quests, setQuests, show, setShow, isLoaded, setIsLoaded } = useStatesMapWar();


    const mapsComponents = mapsFiltered.map((map, i) => {
        
        if(CCCWarsId.includes(war.id)) {
            map.mapImage = CCC[i];
        }

        return (
            <WarMapContext.Provider value={{ quests, setQuests, setShow, show, isLoaded, setIsLoaded }}  key={i}>
                <section  style={{ marginTop: "1rem" }}>
                    <h1>{war.name} | #{map.id}</h1>
                    <hr />
                    { isLoaded ? 
                        (
                            <Tabs id={'war-map-tabs'} onSelect={() => { show && setShow(false)  }} defaultActiveKey={'main'} mountOnEnter={false}>
                                <Tab eventKey="main" title="Main Quests">
                                    {show && <QuestListRender quests={quests} region={region} />}
                                    <RenderMap height={map.mapImageH} width={map.mapImageW} image={map.mapImage}>
                                        <RenderSpots
                                            region={region}
                                            type={Quest.QuestType.MAIN} 
                                            spots={war.spots} 
                                            mapId={map.id} 
                                        />
                                        
                                    </RenderMap>
                                </Tab>
                                
                                <Tab eventKey="free" title="Free Quests">
                                    {show && <QuestListRender quests={quests} region={region} />}
                                    <RenderMap height={map.mapImageH} width={map.mapImageW} image={map.mapImage}>
                                        <RenderSpots 
                                            region={region}
                                            type={Quest.QuestType.FREE} 
                                            spots={war.spots} 
                                            mapId={map.id} 
                                        />
                                    </RenderMap>
                                </Tab>

                                {
                                    war.eventName ? (
                                        // Show in event
                                        <Tab eventKey="event" title="Event Quests">
                                            {show && <QuestListRender quests={quests} region={region} />}
                                            <RenderMap height={map.mapImageH} width={map.mapImageW} image={map.mapImage}>
                                                <RenderSpots 
                                                    region={region}
                                                    type={Quest.QuestType.EVENT}
                                                    spots={war.spots} 
                                                    mapId={map.id} 
                                                />
                                            </RenderMap>
                                        </Tab>
                                    ) : (
                                        // show in story
                                        <Tab eventKey="friendship" title="Interludes Quests">
                                            {show && <QuestListRender quests={quests} region={region} />}
                                            <RenderMap height={map.mapImageH} width={map.mapImageW} image={map.mapImage}>
                                                <RenderSpots
                                                    region={region}
                                                    type={Quest.QuestType.FRIENDSHIP} 
                                                    spots={war.spots} 
                                                    mapId={map.id} 
                                                />
                                            </RenderMap>
                                        </Tab>
                                    )
                                }
                            </Tabs>
                        ) : (
                            <div>
                                This war has not map image to view!
                            </div>
                        )
                    }
                    
                    
                </section>
            </WarMapContext.Provider>
        )
    })

    return (
        <>
            {mapsComponents}
        </>
    )
}