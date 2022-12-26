import React from "react";
import GitHubUser from "./github-user";
import { Quiz } from "./quiz";
import CoinDesk from "./coin-desk";
import EmailInput from "./email-input";
import { EventCounter } from "./event-counter";
import GenericTable from "./generictable";
import DataFlow from "./dataflow";
import Sum from "./sum";
import Vehicles from "./vehicles";
import { Button } from "./hook-example";
import { Identity } from "./identity";
import ToogleImage from "./toggle-image";
import UsersCustomHook from "./users-custom-hook";

export default function MiscDemo() {

    return (
        <div>
            <h3>Misc. Demos</h3>

            <table className="table">
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Sum a={4} b={5} />
                        </td>

                        <td>
                            <h5>Hooks: state</h5>
                            <Button />
                        </td>

                        <td>
                            <DataFlow />
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <h5>1. Keyboard Events</h5>
                            <Quiz />
                        </td>
                        <td>
                            <h5>2. Load GitHub User Data</h5>
                            <GitHubUser />
                        </td>
                        <td>
                            <h5>3. place holder</h5>                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5>4. Users - CustomHook</h5>
                            <UsersCustomHook />
                        </td>
                        <td>
                            <h5>5. EventCounter</h5>
                            <EventCounter onEvenClick={(data) => console.log(data)} />
                        </td>
                        <td>
                            <h5>6. Generic Table</h5>
                            <GenericTable />

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5>7. Ref</h5>

                            <Identity />
                        </td>
                        <td>
                            <CoinDesk />
                        </td>
                        <td>

                            <Vehicles />

                        </td>
                    </tr>

                    <tr>
                        <td>
                            <ToogleImage />
                        </td>
                        <td>
                            <EmailInput />
                        </td>
                        <td>

                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}