"use client";

import { Avatar } from "@heroui/react";

export function UserProfile() {
  return (
    <div className="flex items-center gap-3">
      <Avatar
        src="https://i.iheart.com/v3/surl/aHR0cDovL2ltYWdlLmloZWFydC5jb20vaW1hZ2VzL292ZXJyaWRlLzMzMjIxX2UyMmRlYmE5LTk4YmEtNGEwMi1iYTU3LTg0MGYyOGY4MTdjMi5qcGc=?ops=fit(480,480),run(%22circle%22)&sn=eGtleWJhc2UyMDIxMTExMDq9LAKlzFRYDd36j_6RZOwEqzifmjPU_j6xgy8SIviZfw%3D%3D&surrogate=1cOXl179JY-syhxYSCX6Q1a_Mcu6UO8d-F4oJzpZf1hcUbJr4aImx9MLEFetygNPZpV2ZY3FSA2nxPuIZkZFcC7oEgF9IhI2WV9X7IMBguhn64irS1WOWTJNC9uaHklcynCNEGAwk48BmTu43DJl1jCmPak31qXqic0JnIb9gaQ0b0pR1aAZa4NiT0RfAt-W91FLEvnrocPaUC0l1gj9itNk4O6nma_3M91UrWVqIfN0PXTI9fdnr-_XL63b7WNd"
        size="md"
        isBordered
        color="warning"
      />
      <div>
        <p className="font-medium">Taylor Swift</p>
        <p className="text-sm text-gray-500">Inventory Admin Intern</p>
      </div>
    </div>
  );
}
