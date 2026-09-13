import CardLinkComponent from "./CardLink";

export default function CardComponent({course,duration,des}){
     
     return (
          <div className="card">
               <div className="card-body">
                    <h3 className="card-title">{course}</h3>
                    <p>Duraton: {duration} months</p>
                    <p className="card-text">{des}</p>
                    <CardLinkComponent link={course}></CardLinkComponent>
               </div>
          </div>
     )
}
