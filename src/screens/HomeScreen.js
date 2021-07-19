import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import "./Homescreen.css";
import requests from "../Requests";
import Row from "../components/Row";
export default function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />

      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title="Romantic Movies"
        fetchUrl={requests.fetchRomanticMovies}
        isLargeRow
      />
      {/* <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      /> */}
    </div>
  );
}
