/* eslint-disable no-undef */
import { Link } from "react-router-dom"
import logo from "../../assets/logo/Group 1.svg"
import { navbar } from "../../utils/utils"
import React from "react"
import Button from "../Buttons/Button"
import "./style.css"


export default function Navbar() {
    return (
        <nav>
            <div className="image_log">
                <img src={logo} alt="" className="logo" />
            </div>

            <div className="boxRightnavbar">
                <ul className="list">
                    {navbar?.map(({ path, id, name }) => {
                        return (
                            <React.Fragment key={id}>
                                <Link to={path}><li className="list_item">{name}</li></Link>
                                {/* <Route path="*" element={<h1>404 Page Not Found</h1>} />
                            <Route path="/" element={<Navigate to={"home"} />}></Route> */}
                            </React.Fragment>
                        )
                    })}
                </ul>
                <div className="btn">
                    <Button className={"orange"} name={"Manage Booking"} />
                </div>
            </div>



        </nav>
    )
}
