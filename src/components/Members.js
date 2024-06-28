import React from "react";
import { useSearchParams } from "react-router-dom";
function Members() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get("filter") === "active"; //filter: acitve ise isActive true döner
  return (
    <>
      <div>Members</div>
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Aktif Üyeler
      </button>
      <button onClick={() => setSearchParams()}>Tüm Üyeler</button>
      {isActive? <h2>aktif Üyeler</h2>: <h2>tüm Üyeler</h2>}
    </>
  );
}

export default Members;
