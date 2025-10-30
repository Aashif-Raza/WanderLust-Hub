mapboxgl.accessToken = mapToken;

const coordinates = listing.geometry.coordinates;

const map = new mapboxgl.Map({
  container: "map", // ID of the map div
  style: "mapbox://styles/mapbox/streets-v12", // Map style
  center: coordinates, // Center on listing's location [lng, lat]
  zoom: 8, // Zoom level
});

// Optional: add zoom and rotation controls to the map
map.addControl(new mapboxgl.NavigationControl());

// Log coordinates for debugging
console.log("Coordinates:", coordinates);

// Add a red marker with popup
new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 })
      .setHTML(`<h4>${listing.title}</h4><p>Exact location will be provided after booking.</p>`)
  )
  .addTo(map);