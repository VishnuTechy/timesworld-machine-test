// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../redux/countrySlice";
import ImageSlider from "../components/ImageSlider";
import Filter from "../components/Filter";
import CountryList from "../components/CountryList";
import { Navbar, Nav } from "react-bootstrap";
import Footer from "../components/Footer";
const TopNav = ({ region, onRegionChange }) => (
  <Navbar
    bg="white"
    className="mb-3 justify-content-between"
    style={{ fontSize: "large", fontWeight: "bold" }}
  >
    <Navbar.Brand>Countries</Navbar.Brand>
    <Nav>
      {["All", "Asia", "Europe"].map((r) => (
        <Nav.Link
          key={r}
          active={region === r}
          onClick={() => onRegionChange(r)}
        >
          {r}
        </Nav.Link>
      ))}
    </Nav>
  </Navbar>
);
const Home = () => {
  const dispatch = useDispatch();
  const { countries, status } = useSelector((state) => state.countries);
  const [visibleCount, setVisibleCount] = useState(20);
  const [region, setRegion] = useState("All");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCountries());
    }
  }, [status, dispatch]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 20);
  };

  const handleRegionChange = (selectedRegion) => {
    setRegion(selectedRegion);
    setVisibleCount(20);
  };

  const filteredCountries =
    region === "All"
      ? countries
      : countries.filter((country) => country.region === region);

  return (
    <Container className="mt-4 px-3 px-md-5 bg-white rounded shadow-sm pb-5">
      <TopNav region={region} onRegionChange={handleRegionChange} />

      <div className="d-flex justify-content-center align-items-center my-4">
  <div
    style={{
      flex: 1,
      height: "2px",
      backgroundColor: "3D3D3D",
      marginRight: "10px",
      transform: "translateY(-6px)", // lift the left line
    }}
  />
  <h1  style={{color: "3D3D3D" }} className="fw-bold m-0">WELCOME</h1>
  <div
    style={{
      flex: 1,
      height: "2px",
      backgroundColor: "#3D3D3D",
      marginLeft: "10px",
      transform: "translateY(6px)", // lower the right line
    }}
  />
</div>


      <Row className="mb-4">
        <Col>
          <ImageSlider />
        </Col>
      </Row>

      <Filter region={region} onRegionChange={handleRegionChange} />
      <CountryList countries={filteredCountries.slice(0, visibleCount)} />
      {visibleCount < filteredCountries.length && (
        <div className="text-center my-4">
          <Button
            style={{ backgroundColor: "#3D3D3D" }}
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        </div>
      )}
      <Footer />
    </Container>
  );
};

export default Home;
