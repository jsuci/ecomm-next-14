export default async function About() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <h1 className="text-3xl">Hello, from About Page!</h1>;
}
