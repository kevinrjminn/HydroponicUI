import React, { useState } from "react";

function SearchDates() {
   const [startDate, setStartDate] = useState('');
   const [endDate, setEndDate] = useState('');


   const onSubmit = (e) => {
      e.preventDefault();
   };
   return (
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }

export default SearchDates;