// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../redux/countrySlice";
import ImageSlider from "../components/ImageSlider";
import Filter from "../components/Filter";
import CountryList from "../components/CountryList";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import Footer from "../components/Footer";
const TopNav = ({ region, onRegionChange }) => {
    const [showDropdown, setShowDropdown] = useState(false);
  
    return (
      <Navbar
        expand="md"
        style={{
          backgroundColor: "var(--primary-color)",
          color: "var(--secondary-color)",
          fontSize: "large",
          fontWeight: "bold",
        }}
        className="mb-3 justify-content-between"
      >
        <Navbar.Brand>Countries</Navbar.Brand>
  
        {/* Menu visible on medium and up */}
        <Nav className="d-none d-md-flex">
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
  
        {/* Hamburger dropdown on small screens */}
        <div className="d-flex d-md-none">
          <FaBars
            size={24}
            onClick={() => setShowDropdown((prev) => !prev)}
            style={{ cursor: "pointer", color: "#3D3D3D" }}
          />
          {showDropdown && (
            <div
              style={{
                position: "absolute",
                top: "60px",
                right: "10px",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                zIndex: 9999,
              }}
            >
              {["All", "Asia", "Europe"].map((r) => (
                <div
                  key={r}
                  onClick={() => {
                    onRegionChange(r);
                    setShowDropdown(false);
                  }}
                  style={{
                    padding: "10px 20px",
                    cursor: "pointer",
                    backgroundColor: region === r ? "#3D3D3D" : "#fff",
                    color: region === r ? "#fff" : "#3D3D3D",
                  }}
                >
                  {r}
                </div>
              ))}
            </div>
          )}
        </div>
      </Navbar>
    );
  };
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
    <Container
      className="mt-4 px-3 px-md-5 bg-white rounded shadow-sm pb-5"
      style={{
        backgroundColor: "var(--primary-color)",
        color: "var(--secondary-color)",
      }}
    >
      <TopNav region={region} onRegionChange={handleRegionChange} />

      <div className="d-flex justify-content-center align-items-center my-4">
      <div
          style={{
            flex: 1,
            height: "2px",
            backgroundColor: "#3D3D3D",
            marginRight: "10px",
            transform: "translateY(-6px)", // higher the right line
          }}
        />
        <h1 style={{ color: "3D3D3D" }} className="fw-bold m-0">
          WELCOME
        </h1>
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
            style={{
              backgroundColor: "var(--secondary-color)",
              color: "var(--primary-color)",
              border: "none",
            }}
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
