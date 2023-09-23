import { Button, Card } from "react-bootstrap"

function MovieCard({movie}){
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Card>
                    <Card.Img 
                    variant="top"
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    />


                    <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>{movie.overview.slice(0,50)}...</Card.Text>
                            <Button variant="primary">Assistir</Button>
                    </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard