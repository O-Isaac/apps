import { War, Quest, Region } from "@atlasacademy/api-connector";
import "./MapWar.css";
import { Tab, Tabs, Button, Dropdown } from 'react-bootstrap';
import { faRightToBracket, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext, useMemo, useState } from "react";
import WarMapContext, { useStatesMapWar, mapResources, mapResurcesId } from "../Hooks/useContextWarMapQuestList"
import CanvasMapWar from "./CanvasMapWar";
import { useEffect } from "react";

const MAP_HIDDEN = [
    30502, // LB 5, map wihtout spot and blue background
]


const ButtonsOptions = () => {
    const { setShowName, showName, setShowRoads, showRoads } = useContext(WarMapContext);

    return (
        <div className="buttons-options-war">
            <Button onClick={() => setShowName(!showName)} variant="dark">
                {showName ? "Hide" : "Show "} Names
            </Button>
            <Button onClick={() => setShowRoads(!showRoads)} variant="dark">
                {showRoads ? "Hide" : "Show "} Roads (WIP)
            </Button>
        </div>
    )
}

interface QuestListRenderProps { 
    quests: Quest.Quest[], 
    region: Region,
}

const QuestListRender = ({ quests, region }: QuestListRenderProps) => {
    const { setShow } = useContext(WarMapContext);

    const Quest = ({ quest }: { quest: Quest.Quest }) => (
        <p>
            <Link to={`/${region}/quest/${quest.id}`}>
                <FontAwesomeIcon icon={faRightToBracket} /> {quest.name}
            </Link>
        </p>
    )

    const ScriptsPhase = ({ script }: { script: Quest.PhaseScript }) => (
        <> 
            <Dropdown.Item href={`/db/${region}/script/${script.scriptId}`}>
                {`${script.scriptId.toString().slice(-2)}`}
            </Dropdown.Item>
        </>
    )

    const ScriptsQuest = ({ phase }: { phase: Quest.QuestPhaseScript }) => (
        <Dropdown>
                <Dropdown.Toggle className="war-scripts-button">
                #{phase.phase}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {phase.scripts.map((script, i) => (
                        <ScriptsPhase key={script.scriptId} script={script} />
                    ))}
                </Dropdown.Menu>
        </Dropdown>
    )
    return (
        <>
            <div onClick={() => setShow(false)} className="war-questList-close-button">
                <FontAwesomeIcon icon={faClose} />
            </div>
            <div className="war-questList">
                <h3>Quests</h3>
                <hr />
                <section >
                    {quests.map((quest, i) => (
                       <div className="war-questList-innerContainer" key={i}>
                            <div key={i} id="name">
                                {i === 0 && (
                                    <div className="war-questList-section-title">
                                        <span>Name</span>
                                    </div>
                                )}
                                <Quest quest={quest} />
                            </div>
                            <div id="scripts">
                                {i === 0 && (
                                    <div className="war-questList-section-title">
                                        <span>Scripts Phases</span>
                                    </div>
                                )}
                                <div className="war-scripts">
                                    {quests && quest.phaseScripts.map((phase) => (
                                        <ScriptsQuest key={i} phase={phase} />
                                    ))}
                                </div>
                            </div>
                       </div>
                    ))}
                </section>
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
    const { setShow, show, setQuests, showName: showNameContext, lastIDspotCliked, setLastIDspotCliked } = useContext(WarMapContext);
    const [ showName, setShowName ] = useState<boolean>(showNameContext);

    const NameSpot = () => (
        <div 
            data-id={String(spot.id)}
            className="spot-name"
            style={{
                top: spot.y + spot.questOfsY + spot.nameOfsY + 100,
                left: spot.x - spot.questOfsX + spot.nameOfsX - 50,
            }}>{spot.name}
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
                data-id={String(spot.id)}
                alt={spot.name} 
                src={spot.image} 
                className={"map-war-spot " + String(spot.id)} 
                style={spotStyle}
            />
        )
    }, [spot]);

    const handlerClick = (event: any) => {
        const id = event.target.dataset.id;
        const quests = spot.quests.filter(quest => quest.type === type);

        switch(true) {
            case (id === String(lastIDspotCliked)):
                setShow(!show);
                setLastIDspotCliked(id);
                setQuests(quests);
                break;
            default: 
                setShow(true);
                setLastIDspotCliked(id);
                setQuests(quests);
                break;
        }
    }
    
    useEffect(() => {
        setShowName(showNameContext);
    }, [showNameContext])

    const onEnterName = () => showNameContext ? null : setShowName(true)
    const onLeaveName = () => showNameContext ? null : setShowName(false)

    return (
       <>
            <div onMouseEnter={onEnterName} onMouseLeave={onLeaveName} onClick={handlerClick}>
                {SpotImageMemorized}
                {showName && <NameSpot />}
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
    
    const spotFiltered = spots
        .filter(spot => spot.mapId === mapId && spot.x < 99999 && spot.y < 99999)
        .filter((spot) => {
            
            if(spot.quests.length === 0) {

                const filterPosition = spots.filter(srcSpot => {
                    return srcSpot.x === spot.x && srcSpot.y === spot.y && srcSpot.id !== spot.id;
                })

                if(filterPosition.length > 0) {
                    return false
                }

                return true
            }

            const QuestTypeFound = spot.quests.some(q => q.type === type);
            
            if(QuestTypeFound) {
                // console.log('have quests:', spot)
                return true;
            }

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
    mapId: number,
}

const RenderMap = (props: RenderMapProps) => {
    const { children, image, height, width, mapId } = props;
    const { setIsLoaded, spots, roads } = useContext(WarMapContext);

    return (
        <figure id={"map-" + mapId} className="map-war">
                <img 
                onError={() => {
                    setIsLoaded(false)
                }}
                style={{ zoom: 0.578 }} height={height + 'px'} width={width + 'px'} src={image} alt="map" />
                {children}
                <ButtonsOptions />
                <CanvasMapWar mapId={mapId} spots={spots} roads={roads} height={height} width={width} />
        </figure>
    );
}

interface MapWarProps {
    war: War.War;
    region: Region;
}

export default function MapWar({ war, region }: MapWarProps) {
    const mapsFiltered = war.maps.filter((map) => !MAP_HIDDEN.includes(map.id));
    
    const contextStates = useStatesMapWar({
        warRoads: war.spotRoads,
        warSpots: war.spots,
        defaultQuestType: Quest.QuestType.FREE,
    });

    const mapsComponentsQuests= mapsFiltered.map((map, i) => {
        
        Object.entries(mapResurcesId).forEach(([resourceId, ids]) => {
            if(ids.includes(war.id)) {
                console.log(mapResources[resourceId][i])
                map.mapImage = mapResources[resourceId][i];
            }
        })
        

        const onSelectHandler = (e: any) => {
            contextStates.show && contextStates.setShow(false);
            contextStates.setSetTypeQuest(e)
        }

        const content = (
            <WarMapContext.Provider value={contextStates}  key={i}>
                <section style={{ marginTop: "1rem"}}>
                <Tabs id={'quests-tabs'} onSelect={onSelectHandler} defaultActiveKey={'free'} mountOnEnter={false}>
                    <Tab eventKey="main" title="Main Quests">
                        {contextStates.show && <QuestListRender quests={contextStates.quests} region={region} />}
                        <RenderMap mapId={map.id} height={map.mapImageH} width={map.mapImageW} image={map.mapImage}>
                            <RenderSpots
                                region={region}
                                type={Quest.QuestType.MAIN} 
                                spots={war.spots} 
                                mapId={map.id} 
                            />
                        </RenderMap>
                    </Tab>

                    <Tab eventKey="free" title="Free Quests">
                        {contextStates.show && <QuestListRender quests={contextStates.quests} region={region} />}
                        <RenderMap mapId={map.id} height={map.mapImageH} width={map.mapImageW} image={map.mapImage}>
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
                                {contextStates.show && <QuestListRender quests={contextStates.quests} region={region} />}
                                <RenderMap mapId={map.id} height={map.mapImageH} width={map.mapImageW} image={map.mapImage}>
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
                                {contextStates.show && <QuestListRender quests={contextStates.quests} region={region} />}
                                <RenderMap mapId={map.id} height={map.mapImageH} width={map.mapImageW} image={map.mapImage}>
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
                </section>
            </WarMapContext.Provider>
        )

        return {
            map: map,
            component: content
        }
    })


    const tabs = mapsComponentsQuests.map((map, i) => {
        return (
            <Tab eventKey={map.map.id} title={' #'+ map.map.id} key={i}>
                {map.component}
            </Tab>
        )
    })

    return (
        <>
            { contextStates.isLoaded ? (
            <div style={{ marginTop: "1rem"}}>
                <Tabs id={'maps-war'} mountOnEnter={false} >
                    {tabs}
                </Tabs>
            </div>
            ) : "This war doesn't have any map" }
            
        </>
    )
}