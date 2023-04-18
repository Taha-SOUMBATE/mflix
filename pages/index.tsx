import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-md-4">
              <div className="card w-100 mt-5">
                <div className="card-body">
                  <h5 className="card-title">Top 20 Movies of All Time</h5>

                  <Link href="/movies" className="card-link">
                    Card link
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card w-100 mt-5">
                <div className="card-body">
                  <h5 className="card-title">Top 1000 Movies of All Time</h5>

                  <Link href="/top" className="card-link">
                    Card link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
