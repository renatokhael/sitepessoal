export default function Section({ children }) {
  return (
    <section className="min-h-[600px] bg-gradient-to-r from-[#003339] to-black p-10 ">
      <div className="container mx-auto flex flex-col p-10 ">{children}</div>
    </section>
  );
}
