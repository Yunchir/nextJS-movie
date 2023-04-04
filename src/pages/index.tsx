import Card from "./card";

export default function Home(): JSX.Element {
  const a = 15;
  console.log("a:", a);

  return (
    <>
      <div className="flex flex-wrap  w-full">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
