export default function GreetUser(prop) {
  if (prop.time < 12) {
    return <h2>Morning</h2>;
  } else if (prop.time < 16) {
    return <h2>Afternoon</h2>;
  } else if (prop.time < 24) {
    return <h2>Evening</h2>;
  } else {
    return <h2>Invalid</h2>;
  }
}