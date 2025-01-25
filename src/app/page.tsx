import Phoenix from "@/components/phoenix/Phoenix";

function page() {
  return (
    <main className="flex justify-center items-center h-screen w-screen ">
      <div className="fixed inset-0 z-[-1]">
        <Phoenix />
      </div>
    </main>
  );
}

export default page;
