import React from 'react'

const News = () => {
  return (
    <div className="font-bold">
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1.25rem",
          marginTop: "1.25rem",
        }}
      >
        News
      </h1>
      <p
        style={{ textAlign: "center", fontWeight: "normal", width:"100%", marginBottom:"9rem" }}
      >
        Sorry for the inconvinence. Please wait because the site is under
        maintainance.
      </p>
    </div>
  );
}

export default News