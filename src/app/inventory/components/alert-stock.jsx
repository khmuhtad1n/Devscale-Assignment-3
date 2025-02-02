"use client";

import { Card, CardBody, CardHeader, Chip, Divider } from "@heroui/react";

export function AlertStock({ data }) {
  const MIN_QUANTITY = 20;
  const lowStockItems = data.reduce((acc, item) => {
    if (item.quantity < MIN_QUANTITY) {
      if (!acc[item.lokasi_gudang]) {
        acc[item.lokasi_gudang] = [];
      }
      acc[item.lokasi_gudang].push({
        item: item.item,
        current: item.quantity,
        needed: MIN_QUANTITY - item.quantity,
      });
    }
    return acc;
  }, {});

  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
      {Object.entries(lowStockItems).map(([warehouse, items]) => (
        <Card key={warehouse} className="border-none">
          <CardHeader className="flex flex-col gap-2">
            <h4 className="text-xl font-bold text-white">{warehouse}</h4>
            <p className="text-sm text-red-600">
              {items.length} {items.length === 1 ? "item" : "items"} need
              restock
            </p>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.item}
                  className="flex justify-between items-center"
                >
                  <span className="font-small text-white ">{item.item}</span>
                  <div className="flex gap-2">
                    <Chip variant="flat" color="warning" size="sm">
                      Stock: {item.current}
                    </Chip>
                    <Chip variant="flat" color="danger" size="sm">
                      Need: {item.needed}
                    </Chip>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
