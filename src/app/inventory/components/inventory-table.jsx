"use client";

import { EditButton } from "./edit-item";
import { DeleteButton } from "./delete-item";
import { TablePagination } from "./table-pagination";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";

const columns = [
  { key: "gudang", label: "WAREHOUSE" },
  { key: "item", label: "ITEM" },
  { key: "quantity", label: "QUANTITY" },
  { key: "satuan", label: "UNIT" },
  { key: "actions", label: "ACTIONS" },
];

export function InventoryTable({ data }) {
  const rows = data.map((item) => ({
    key: item._id,
    gudang: item.lokasi_gudang,
    item: item.item,
    quantity: item.quantity,
    satuan: item.satuan,
    actions: (
      <div className="flex gap-2">
        <EditButton itemData={item} />
        <DeleteButton id={item._id} />
      </div>
    ),
  }));

  return (
    <>
      <Table aria-label="Inventory List">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              className={column.key === "actions" ? "text-center" : ""}
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell
                  className={
                    columnKey === "actions" ? "flex justify-center" : ""
                  }
                >
                  {" "}
                  {item[columnKey]}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination data={data} />
    </>
  );
}
