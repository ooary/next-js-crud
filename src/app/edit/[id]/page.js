import EditItem from "@/app/components/editItem";

export default async function Page({ params }) {
  const { id } = await params;
  const baseUrl = `https://v1.appbackend.io/v1/rows/csqKLPhkDWIN/${id}`;
  const todo = await fetch(baseUrl);
  const data = await todo.json();
  return (
    <>
      <div className="space-y-2 p-5">
        <div>
          <h3>{data.stock}</h3>
          <h3>{data.content}</h3>
        </div>
        <EditItem data={data} />
      </div>
    </>
  );
}
