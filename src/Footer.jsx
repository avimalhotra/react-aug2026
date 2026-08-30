export default function FooterComponent() {
  return (
    <footer className="bg-secondary-subtle p-3 d-flex justify-content-between">
      <p className="m-0">&copy;{new Date().getFullYear()}</p>
      <p className="m-0">All Rights Reserved</p>
    </footer>
  );
}
