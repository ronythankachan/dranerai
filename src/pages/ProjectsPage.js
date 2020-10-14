import React, {useState} from "react";
import {Sidebar} from "../components/Sidebar";
import ClosedSeq2seq from "../components/Projects/ClosedSeq2seq";
import OpenChatBot from "../components/Projects/OpenChatBot";
import ChatBotPersona from "../components/Projects/ChatBotPersona";

function ProjectsPage() {
    const [projectId, setProjectId] = useState("projectId");
    const projectDetails = [
        {
            project_id: "p1",
            project_name: "Closed domain chatbot",
            description: "A simple closed domain chatbot",
            tags: [
                "Chatbot", "Closed domain", "Seq2seq"
            ],
            created_on: "20-August-2020"
        },
        {
            project_id: "p2",
            project_name: "Open domain generative chatbot",
            description: "Chatbot that generates content by itself",
            tags: [
                "Chatbot", "Open domain", "Seq2seq", "whatsapp"
            ],
            created_on: "01-June-2020"
        },
        {
            project_id: "p3",
            project_name: "Chatbot persona",
            description: "A character and behavior library for chatbot",
            tags: [
                "Chatbot", "persona", "Seq2seq"
            ],
            created_on: "20-August-2020"
        },
        {
            project_id: "p4",
            project_name: "CCTV number plate detection",
            description: "Vehicle number identification using number plate images",
            tags: [
                "computer vision", "cctv", "traffic"
            ],
            created_on: "3-November-2020"
        }, {
            project_id: "p3",
            project_name: "Chatbot persona",
            description: "A character and behavior library for chatbot",
            tags: [
                "Chatbot", "persona", "Seq2seq"
            ],
            created_on: "20-August-2020"
        }, {
            project_id: "p4",
            project_name: "CCTV number plate detection",
            description: "Vehicle number identification using number plate images",
            tags: [
                "computer vision", "cctv", "traffic"
            ],
            created_on: "3-November-2020"
        }, {
            project_id: "p3",
            project_name: "Chatbot persona",
            description: "A character and behavior library for chatbot",
            tags: [
                "Chatbot", "persona", "Seq2seq"
            ],
            created_on: "20-August-2020"
        }, {
            project_id: "p4",
            project_name: "CCTV number plate detection",
            description: "Vehicle number identification using number plate images",
            tags: [
                "computer vision", "cctv", "traffic"
            ],
            created_on: "3-November-2020"
        }, {
            project_id: "p3",
            project_name: "Chatbot persona",
            description: "A character and behavior library for chatbot",
            tags: [
                "Chatbot", "persona", "Seq2seq"
            ],
            created_on: "20-August-2020"
        }, {
            project_id: "p4",
            project_name: "CCTV number plate detection",
            description: "Vehicle number identification using number plate images",
            tags: [
                "computer vision", "cctv", "traffic"
            ],
            created_on: "3-November-2020"
        }, {
            project_id: "p3",
            project_name: "Chatbot persona",
            description: "A character and behavior library for chatbot",
            tags: [
                "Chatbot", "persona", "Seq2seq"
            ],
            created_on: "20-August-2020"
        }, {
            project_id: "p4",
            project_name: "CCTV number plate detection",
            description: "Vehicle number identification using number plate images",
            tags: [
                "computer vision", "cctv", "traffic"
            ],
            created_on: "3-November-2020"
        }
    ];

    const changeProject = (id) => {
        setProjectId(id);
    }
    return (
        <div>
            <Sidebar data={projectDetails}
                changeProject={changeProject}
                key={projectId}/>
            <Project projectId={projectId}/>
        </div>
    );
}

const Project = ({projectId}) => {
    switch (projectId) {
        case "p1":
            return <ClosedSeq2seq/>
        case "p2":
            return <OpenChatBot/>
        case "p3":
            return <ChatBotPersona/>
        default:
            return <ClosedSeq2seq/>
    }
};

export default ProjectsPage;
