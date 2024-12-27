import { Button } from "@nextui-org/react";
import { Camera } from "lucide-react";

import Area4 from "./assets/area4.svg?react";

export default function App() {
  return (
    <div className="absolute left-1/2 top-1/2 mx-auto w-2/3 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-blue-200 p-4">
      <div className="my-10">
        <Button color="primary">NextUI 示例</Button>
      </div>
      <div className="my-10">
        <p className="text-red-500">Tailwind 示例</p>
      </div>
      <div className="my-10">
        <span>Lucide 示例</span>
        <Camera color="red" size={48} className="inline" />
        <span>自定义 svg 示例</span>
        <Area4 className="inline size-10"></Area4>
      </div>
    </div>
  );
}
