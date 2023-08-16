import React from "react";

export default function ButtonTest() {
  return (
    <>
      <a
        className="btn btn-main btn-create-server-small"
        href="https://exaroton.com/create/"
        title="Crea un server"
        style={{
          margin: "0px",
          fontFamily: "Poppins, sans-serif",
          boxSizing: "border-box",
          textDecoration: "none",
          transition: "background 0.05s ease 0s",
          whiteSpace: "nowrap",
          fontWeight: "var(--bold, 700)",
          fontSize: "18px",
          display: "inline-block",
          cursor: "pointer",
          userSelect: "none",
          backgroundColor: "#19ba19",
          borderRadius: "1000px",
          padding: "7px 15px",
          color: "var(--color-light, #f0f0f0)",
        }}
      >
        <i
          className="fas fa-plus"
          style={{
            padding: "0px",
            margin: "0px",
            boxSizing: "border-box",
            fontVariant: "normal",
            WebkitFontSmoothing: "antialiased",
            display: "var(--fa-display, inline-block)",
            fontStyle: "normal",
            lineHeight: 1,
            textRendering: "auto",
            fontFamily: '"Font Awesome 6 Pro"',
            fontWeight: 900,
            marginRight: "8px",
          }}
        />
        Crea{" "}
      </a>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  padding: 0px;
  margin: 0px;
  font-family: Poppins, sans-serif;
  box-sizing: border-box;
  overflow: hidden;
  height: 100%;
}

body {
  padding: 0px;
  margin: 0px;
  font-family: Poppins, sans-serif;
  box-sizing: border-box;
  overflow: hidden;
  height: 100%;
  background: #0f0f0f;
}
`,
        }}
      />
    </>
  );
}

