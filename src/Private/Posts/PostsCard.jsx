export const PostsCard = ({title, body, author, id}) =>{
    return(
   <div className="card m-4" style={{width: '18rem'}} key={id}>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
    <p className="card-text">{body}</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>

    )
}