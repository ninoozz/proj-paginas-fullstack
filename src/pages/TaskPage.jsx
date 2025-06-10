import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500 flex flex-col justify-center p-6 items-center ">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center items-center relative mb-6 ">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1 bottom-0 text-white"
          >
            <ChevronLeft />
          </button>
          <h1 className="text-3xl text-white font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
          <p className=" text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
