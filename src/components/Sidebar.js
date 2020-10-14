import React from "react";
import "../css/Sidebar.css";

export const Sidebar = ({ data,changeProject }) => {
  return (
    <button className="sidebar scrollbar">
      {data.map(item => {
        return (
          <div onClick={()=>changeProject(item.project_id)}>
            <ProjectCard
            project_id ={item.project_id}
            title={item.project_name}
            description={item.description}
            tags={item.tags}
            date={item.created_on}
            key={item.project_id}
          />
          </div>
        );
      })}
    </button>
  );
};
const ProjectCard = ({ id,title, description, tags, date }) => {
  return (
    <div className="sidebar-card">
      <div className="card-title h6">{title}</div>
      <div className="card-text">{description}</div>
      <Tag tags={tags} />
      <div className="card-footer mt-3">
        <small className="text-muted">{date}</small>
      </div>
    </div>
  );
};

const Tag = ({ tags }) => {
  return (
    <>
      {tags.map(item => (
        <span className="tag">{item}</span>
      ))}
    </>
  );
};
