import EditControlExample from "./edit-control";

function onChange(geojson) {
  console.log("geojson changed", geojson);
}
export default function App() {
  return (
    <div>
      <h1>React-Leaflet-Draw example</h1>
      <EditControlExample onChange={onChange} />
    </div>
  );
}
