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

// export default function CardComponent(x){
//      // console.log( x.course );
     
//      return (
//           <div className="card">
//                <div className="card-body">
//                     <h3 className="card-title">{x.course}</h3>
//                     <p>Duraton: {x.duration} months</p>
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <a href="#" className="btn btn-primary">Go somewhere</a>
//                </div>
//           </div>
//      )
// }