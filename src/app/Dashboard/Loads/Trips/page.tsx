import dynamic from "next/dynamic";

const LoadsView = dynamic(() => import("@/app/components/Loads/LoadsView"));

export default function TruckView() {
  return (
    <div>
      <LoadsView />
    </div>
  );
}
