import {
    Mission,
    Quest,
    Region,
    Servant,
    Item,
    EnumList,
    CondType,
} from "@atlasacademy/api-connector";
import { handleNewLine } from "../Helper/OutputHelper";
import CondTargetNumDescriptor from "./CondTargetNumDescriptor";
import QuestSearchDescriptor from "./QuestSearchDescriptor";

export default function MissionConditionDescriptor(props: {
    region: Region;
    cond: Mission.MissionCondition;
    warIds?: number[];
    servants?: Map<number, Servant.ServantBasic>;
    quests?: Map<number, Quest.QuestBasic>;
    missions?: Map<number, Mission.Mission>;
    items?: Map<number, Item.Item>;
    enums?: EnumList;
    handleNavigateMissionId?: (id: number) => void;
}) {
    const cond = props.cond;
    let progressType = cond.missionProgressType.toString();
    switch (cond.missionProgressType) {
        case Mission.ProgressType.OPEN_CONDITION:
            progressType = "Unlock condition";
            break;
        case Mission.ProgressType.START:
            progressType = "Show condition";
            break;
        case Mission.ProgressType.CLEAR:
            progressType = "Clear condition";
    }
    return (
        <>
            <i>{progressType}:</i>
            <ul style={{ margin: 0 }}>
                <li>{handleNewLine(props.cond.conditionMessage)}</li>
                <li>
                    <CondTargetNumDescriptor
                        region={props.region}
                        cond={cond.condType}
                        targets={cond.targetIds}
                        num={cond.targetNum}
                        detail={cond.detail}
                        servants={props.servants}
                        quests={props.quests}
                        missions={props.missions}
                        items={props.items}
                        enums={props.enums}
                        handleNavigateMissionId={props.handleNavigateMissionId}
                    />
                </li>
                {cond.condType === CondType.MISSION_CONDITION_DETAIL &&
                (cond.detail?.missionCondType ===
                    Mission.DetailCondType.DEFEAT_ENEMY_INDIVIDUALITY ||
                    cond.detail?.missionCondType ===
                        Mission.DetailCondType.ENEMY_INDIVIDUALITY_KILL_NUM) ? (
                    <>
                        <QuestSearchDescriptor
                            region={props.region}
                            warId={props.warIds ? props.warIds[0] : undefined}
                            enemyTrait={cond.detail.targetIds}
                            hideSearchLink={true}
                        />
                    </>
                ) : null}
            </ul>
        </>
    );
}
