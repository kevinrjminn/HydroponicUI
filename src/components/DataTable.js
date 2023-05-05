import React, { useState, useEffect , useCallback} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DataTable.css';


const DataTable = () => {
  const [sensorData, setSensorData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchData, setSearchData] = useState(false);

  const handleDateSubmit = (submittedStartDate, submittedEndDate) => {
    setStartDate(submittedStartDate);
    setEndDate(submittedEndDate);
    setSearchData(true);
  };

  const fetchSensorData = useCallback(async () => {
    try {
      if (!startDate || !endDate) return;
      const startTime = startDate;
      const endTime = endDate;
      const response = await fetch(`/api/get-data-range?startTime=${encodeURIComponent(startTime)}&endTime=${encodeURIComponent(endTime)}`);

      const results = await response.json();
      console.log(results)

      setSensorData(results);
      console.log(sensorData);
    } catch (error) {
      console.error('Error', error);
    }
  }, [startDate, endDate]);

  function fixTime(d) {
    var leng = d.length;
    var hour = d.slice(0,2);
    var rest = d.slice(2, leng);
    if (parseInt(hour) > 12) {
      hour = parseInt(hour) - 12;
      return hour.toString()+rest+" PM";
    } else if (parseInt(hour) === 12){
      return hour+rest+" PM";
    } else {
      return d+" AM";
    }
  }


  useEffect(() => {
    if (searchData) {
      fetchSensorData();
      setSearchData(false);
    }
  }, [fetchSensorData, searchData]);

  return (
      <>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleDateSubmit(e.target.startDate.value, e.target.endDate.value);
        }}>
          <div className="d-flex">
            <div className="form-field">
              <label htmlFor="startDate">Start Date:</label>
              <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="endDate">End Date:</label>
              <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <p> items found [{sensorData.length}]</p>
            <button className="formBtn" type="submit">Search</button>
          </div>
        </form>
        <div className="tbl-container">
          <table className="table table-striped table-bordered">
            <thead>
            <tr>
              <td className="headRow"><b>Date</b></td>
              <td className="headRow"><b>Time</b></td>
              <td className="headRow"><b>Humidity</b></td>
              <td className="headRow"><b>PH Level</b></td>
              <td className="headRow"><b>Nutrients</b></td>
              <td className="headRow"><b>Temperature</b></td>
            </tr>
            </thead>
            <tbody>
            {sensorData.map((result) => (
                <tr key={result._id}>
                  <td>{result.DateAndTime.slice(0,10)}</td>
                  <td>{fixTime(result.DateAndTime.slice(11,19))}</td>
                  <td>&nbsp;{result.PLC_Humidity_Value}</td>
                  <td>{result.PLC_pH_Value}</td>
                  <td>{result.PLC_TDS_Value}</td>
                  <td>{result.PLC_Temperature_Value}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </>
  );
};
export default DataTable;