// import { state } from "react";
import { useEffect } from "react";
import Avatar from "./components/avatar/Avatar";

function App() {
  const src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRp4Tsuf6Aedl5y7xnk963SitcRV-Ww-zsYg&usqp=CAU";

  return (
    <div className="App">
      <header className="App-header">
        <Avatar src={src} size={"xl"} />
        <Avatar src={src} size={"l"} borderRadius={"rounded"} />
        <Avatar src={src} size={"m"} borderRadius={"circle"} />
        <Avatar src={src} size={"l"} borderRadius={"square"} />
      </header>
    </div>
  );
}

export default App;
