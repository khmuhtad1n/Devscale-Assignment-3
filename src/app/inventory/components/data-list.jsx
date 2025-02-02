import { API_URL } from "@/app/inventory/utils/constants";
import { InputButton } from "./input-item";
import { InventoryTable } from "./inventory-table";

export const DataList = async () => {
  "use server";
  const res = await fetch(API_URL);
  const { data } = await res.json();
  return (
    <div>
      <section className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-bold">Your Inventory</h2>
          <p>Check all stocks here</p>
        </div>
        <InputButton />
      </section>
      <div>
        <InventoryTable data={data} />
      </div>
    </div>
  );
};
