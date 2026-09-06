export default function CardLinkComponent({link,path=""}){
     return (
          <a href={path} className="btn btn-outline-primary">{link}</a>
     )
}