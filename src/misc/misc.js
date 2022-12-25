import React from "react";
import ExternalData from "../external-data/external-data";
import { Quiz } from "../quiz/quiz";
import CoinDesk from "./coin-desk";
import { EventCounter } from "./event-counter";
import GenericTable from "./generictable";
import { Identity } from "./identity";
import Users from "./users";
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
                            <h5>1. Keyboard Events</h5>
                            <Quiz />
                        </td>
                        <td>
                            <h5>2. Load GitHub User Data</h5>
                            <ExternalData />
                        </td>
                        <td>
                            <h5>3. Users -API</h5>
                            <Users />
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
                    </tr>

                </tbody>
            </table>







        </div>
    )
}