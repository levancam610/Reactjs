import React from "react";
import Paginations from "components/Pagination/Pagination.jsx";
function Paging() {
  return (
    <Paginations
      pages={[
        { text: "PREV" },
        { text: 1 },
        { text: 2 },
        { active: true, text: 3 },
        { text: 4 },
        { text: 5 },
        { text: "NEXT" }
      ]}
      color="info"
    />
  );
}

export default Paging;
