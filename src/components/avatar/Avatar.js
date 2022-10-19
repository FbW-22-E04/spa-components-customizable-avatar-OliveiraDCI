import "./avatar.css";

function Avatar({ src, size = "m", borderRadius = "circle" }) {
  const sizes = {
    s: "30 X 30",
    m: "60 X 60",
    l: "120 X 120",
    xl: "200 X 200",
  };

  console.log("src", src);
  return (
    <div className={`size-${size} borderRadius-${borderRadius}`}>
      <img src={src} alt="avatar" />
      <div className="col">
        <p>
          size {size} - {sizes[size]}{" "}
        </p>
        <p>type {borderRadius}</p>
      </div>
    </div>
  );
}

export default Avatar;
