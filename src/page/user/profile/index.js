import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "./profile.css";
import {useNavigate} from "react-router-dom";

function ProfilePage(){
    const navigate = useNavigate()
    const contents = [
        {
            id:1,
            name: "UI UX Design",
            qty: "10 Question",
            time: "1 hour 15 min",
            rating: 4.8,
            stat: "not-attempt"
        },
        {
            id:2,
            name: "Graphic Design",
            qty: "10 Question",
            time: "1 hour 15 min",
            rating: 4.8,
            stat: "not-attempt"
        },
        {
            id:3,
            name: "Graphic Design",
            qty: "10 Question",
            time: "1 hour 15 min",
            rating: 4.8,
            stat: "working"
        }
    ]

    function handleSelect(e){
        if(!e.target.style.outline)
            e.target.style.outline = "2px solid lightblue"
        else
            e.target.style.outline=""
    }

    function handleClick(){
        navigate('/question')
    }
    return(
        <div className="profile-page">
                <h1 className="profile-h1">Let's test your knowledge</h1>
                <div className="search-box">
                    <i className="fa-solid fa-magnifying-glass"/>
                    <input placeholder="Search"/>
                    <i className="fa-solid fa-arrow-right-arrow-left"/>
                </div>
                <div className="profile-content">
                    <Tabs>
                        <TabList className="profile-tablist">
                            <Tab className="profile-tab">Popular</Tab>
                            <Tab className="profile-tab">Science</Tab>
                            <Tab className="profile-tab">Mathematic</Tab>
                            <Tab className="profile-tab">Computer</Tab>
                        </TabList>
                        <TabPanel>
                            <ul>
                                {contents.map((content) => {
                                    return(
                                        <li key={content.id} className="lesson" onClick={handleSelect}>
                                            <h3>{content.name}</h3>
                                            <p>{content.qty}</p>
                                            <p>{content.time}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <ul>
                                //content science
                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <ul>
                                //content mathmatic
                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <ul>
                                //content computer
                            </ul>
                        </TabPanel>
                    </Tabs>
                <button className="profile-button" onClick={handleClick}>Start Quiz</button>
                </div>
        </div>
    )
}

export default ProfilePage;