import React from "react";
import FetchData from "./fetchData";

const FetchApp = () => {
  return (
    <div>
      <FetchData
        render={({ loading, results, error }) => {
          return (
            <div>
              {loading && <p>Loadingss!!!!!</p>}
              {results &&
                results.map(item => <p key={item.id}>{item.title}</p>)}
              {error && <p>Error occured!!</p>}
            </div>
          );
        }}
      />
    </div>
  );
};

export default FetchApp;
