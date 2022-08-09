import "astro/jsx-runtime";
import DefaultLayout from "../layouts/default.astro";

export default (props) => ({ children }) => (
  <DefaultLayout {...props}>{children}</DefaultLayout>
);

