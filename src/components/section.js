export default function Section({ children }) {
  return (
    <section className="min-h-[600px] ">
      <div className="container mx-auto flex flex-col p-10 ">{children}</div>
    </section>
  );
}
