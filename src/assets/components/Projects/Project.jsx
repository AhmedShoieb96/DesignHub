export default function Project({src , title}){
    return (
        <div>
        <div className="project">
            <img className="project-image" src={src} alt="Project image" />
            
        </div>
        <h2 className="project-title">{title}</h2>
        </div>
    )
} 