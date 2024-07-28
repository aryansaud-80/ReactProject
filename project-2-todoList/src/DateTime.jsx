import { useEffect, useState } from "react";

function DateTime() {
  const [dateTime, setDateTime] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      const newDate = new Date();
      const date = newDate.toLocaleDateString();
      const time = newDate.toLocaleTimeString();
      setDateTime(`${date} - ${time}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="date-time">
        <p>{dateTime}</p>
      </div>
    </>
  );
}
export default DateTime;
