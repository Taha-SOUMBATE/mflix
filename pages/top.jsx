import clientPromise from "../lib/mongodb";
import "bootstrap/dist/css/bootstrap.css";
export default function Top({ movies }) {
  return (
    <div className="container">
      <h1>Top 1000 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie._id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                <h3 className="card-subtitle mb-2 text-muted">
                  {movie.metacritic}
                </h3>
                <p className="card-text">{movie.plot}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    const movies = await db
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(1000)
      .toArray();

    return {
      props: { movies: JSON.parse(JSON.stringify(movies)) },
    };
  } catch (e) {
    console.error(e);
  }
}
