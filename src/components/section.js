export default function Section({ children }) {
  return (
    <section className="min-h-[600px] pt-24 bg-gradient-to-r from-[#003339] to-black p-10 xl:p-0 ">
      <div className="container mx-auto flex flex-col ">{children}</div>
    </section>
  );
}
