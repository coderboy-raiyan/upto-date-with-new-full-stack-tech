import ToggleThemeButton from "@/components/ToggleThemeButton/ToggleThemeButton";

function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl text-center my-10">Home Page</h1>
      <div className="flex items-center justify-center gap-2">
        <p>Toggle theme </p>
        <ToggleThemeButton />
      </div>
    </div>
  );
}

export default Home;
