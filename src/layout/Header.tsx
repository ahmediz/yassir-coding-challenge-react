import logoImg from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="flex items-center h-15 z-30 lg:h-[92px] bg-white shadow-sm">
      <div className="max-w-[1200px] w-full mx-auto px-4">
        <img src={logoImg} alt="" width={132} height={40} />
      </div>
    </header>
  );
}
