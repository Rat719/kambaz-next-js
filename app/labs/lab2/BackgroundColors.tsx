import { FormControl, FormLabel } from "react-bootstrap";

export default function BackgroundColors() {
  return (
    <div id="wd-css-styling-forms">
      <h2>Forms</h2>
      <FormLabel>Email address</FormLabel>
      <FormControl type="email" placeholder="name@example.com" />
      <FormLabel>Example textarea</FormLabel>
      <FormControl as="textarea" rows={3} />
    </div>
  );
}
