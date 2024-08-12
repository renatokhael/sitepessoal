export default function Card() {
  return (
    <div className="border-2 border-orange min-h-[400px] min-w-[300px]">
      <div className="h-[200px] bg-zinc-900"></div>
      <div className="border-b-2 border-t-2 border-orange h-[48px]"></div>

      <div className="p-5">
        <h1 className="text-white">Titulo</h1>
        <p className="text-zinc-400">Descrição</p>
      </div>
    </div>
  );
}
