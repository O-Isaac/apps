import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AxiosError} from "axios";
import React from "react";
import {Button, Form, Table} from "react-bootstrap";
import Connection from "../Api/Connection";
import Func, {FuncTargetTeam, FuncTargetType, FuncType} from "../Api/Data/Func";
import Region from "../Api/Data/Region";
import ErrorStatus from "../Component/ErrorStatus";
import Loading from "../Component/Loading";
import SearchableSelect from "../Component/SearchableSelect";
import {funcDescriptions} from "../Descriptor/Func/handleActionSection";
import {targetDescriptions} from "../Descriptor/Func/handleTargetSection";
import FuncDescriptor from "../Descriptor/FuncDescriptor";

let stateCache = new Map<Region, IState>([]);

interface ChangeEvent extends React.ChangeEvent<HTMLInputElement> {

}

interface IProps {
    region: Region;
}

interface IState {
    error?: AxiosError;
    searching: boolean;
    funcs: Func[];
    text?: string;
    type?: FuncType;
    target?: FuncTargetType;
    team?: FuncTargetTeam;
}

class FuncsPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = stateCache.get(props.region) ?? {
            searching: false,
            funcs: []
        };
    }

    componentDidUpdate() {
        stateCache.set(this.props.region, {...this.state});
    }

    private async search() {
        // no filter set
        if (!this.state.text && !this.state.type && !this.state.target && !this.state.team) {
            this.setState({funcs: []});
            alert('Please refine the results before searching');
            return;
        }

        try {
            await this.setState({searching: true, funcs: []});

            const funcs = await Connection.searchFuncs(
                this.props.region,
                this.state.text,
                this.state.type,
                this.state.target,
                this.state.team
            );

            this.setState({searching: false, funcs});
        } catch (e) {
            this.setState({
                error: e
            });
        }
    }

    render() {
        if (this.state.error)
            return <ErrorStatus error={this.state.error}/>;

        return (
            <div>
                {this.state.searching ? <Loading/> : null}

                <form onSubmit={(ev: React.FormEvent) => {
                    ev.preventDefault();
                    this.search();
                }}>
                    <Form.Group>
                        <Form.Label>Text</Form.Label>
                        <Form.Control value={this.state.text ?? ''}
                                      onChange={(ev: ChangeEvent) => {
                                          this.setState({text: ev.target.value});
                                      }}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Type</Form.Label>
                        <SearchableSelect<FuncType> id='select-FuncType'
                                                    options={Object.values(FuncType)}
                                                    labels={funcDescriptions}
                                                    onChange={(value?: FuncType) => {
                                                        this.setState({type: value});
                                                    }}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Target</Form.Label>
                        <SearchableSelect<FuncTargetType> id='select-FuncTargetType'
                                                    options={Object.values(FuncTargetType)}
                                                    labels={targetDescriptions}
                                                    onChange={(value?: FuncTargetType) => {
                                                        this.setState({target: value});
                                                    }}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Affects Players/Enemies</Form.Label>
                        <SearchableSelect<FuncTargetTeam> id='select-FuncTargetTeam'
                                                          options={Object.values(FuncTargetTeam)}
                                                          labels={new Map<FuncTargetTeam, string>([
                                                              [FuncTargetTeam.PLAYER_AND_ENEMY, 'Players and Enemies'],
                                                              [FuncTargetTeam.PLAYER, 'Players only'],
                                                              [FuncTargetTeam.ENEMY, 'Enemies only'],
                                                          ])}
                                                          onChange={(value?: FuncTargetTeam) => {
                                                              this.setState({team: value});
                                                          }}/>
                    </Form.Group>
                    <Button variant={'primary'} onClick={() => this.search()}>
                        Search
                        {' '}
                        <FontAwesomeIcon icon={faSearch}/>
                    </Button>
                </form>

                <hr/>

                <Table responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Function</th>
                        <th>Usage Count</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.funcs.map((func, index) => {
                        return (
                            <tr key={index}>
                                <td>{func.funcId}</td>
                                <td>
                                    <FuncDescriptor region={this.props.region} func={func}/>
                                </td>
                                <td>
                                    {func.reverseTds.length + func.reverseSkills.length}
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default FuncsPage;
