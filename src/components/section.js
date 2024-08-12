export default function Section({ children }) {
  return (
    <section className="min-h-[600px] pt-24 bg-gradient-to-r from-[#003339] to-black">
      <div className="container mx-auto flex flex-col ">{children}</div>
    </section>
  );
}
