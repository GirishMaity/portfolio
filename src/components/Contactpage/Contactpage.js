import React from "react";
import "../../pages/style.css";
import { Container } from "react-bootstrap";
import { Player } from "@lottiefiles/react-lottie-player";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <div
          name="contact"
          style={{
            width: "100%",

            padding: "4px",
            color: "black",
            paddingTop: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "4px",
              justifyContent: "center",
              maxWidth: "100%",
              margin: "auto",
              height: "100%",
            }}
          >
            {/* <div style={{ paddingBottom: "8px" }}>
              <p style={{ padding: "6px" }}>
                Submit the form below to get in touch with me
              </p>
            </div> */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <form
                action="https://getform.io/f/75ec0072-9190-4357-bffa-619151435762"
                method="POST"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  maxWidth: "50%",
                  justifyContent: "space-between",
                  gap: "0.4em",
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  style={{
                    padding: "2px",
                    background: "transparent",
                    border: "2px solid gray",
                    borderRadius: "7px",
                    color: "white",
                    outline: "none",
                  }}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  style={{
                    padding: "2px",
                    marginTop: "4px",
                    background: "transparent",
                    border: "2px solid gray",
                    borderRadius: "7px",
                    color: "white",
                    outline: "none",
                  }}
                />
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  style={{
                    padding: "2px",
                    background: "transparent",
                    border: "2px solid gray",
                    borderRadius: "7px",
                    color: "white",
                    outline: "none",
                  }}
                ></textarea>
                <button
                  style={{
                    background:
                      "linear-gradient(43deg, #4158d0 0%, #c850c0 100%)",
                    padding: "6px 12px",

                    marginTop: "8px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "10px",
                    transform: "scale(1)",
                    transition: "transform 0.3s",
                    hover: { transform: "scale(1.1)" },
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
      <Player
        src="https://assets4.lottiefiles.com/packages/lf20_u25cckyh.json"
        background="transparent"
        speed="1"
        style={{ width: "400px", height: "400px" }}
        loop
        controls
        autoplay
      />
    </div>
  );
}

export default Contactpage;
