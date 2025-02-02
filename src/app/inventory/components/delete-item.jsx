"use client";
import { deleteAction } from "../actions/action-delete";
import { Button } from "@heroui/react";

export function DeleteButton({ id }) {
  return (
    <form action={() => deleteAction(id)}>
      <Button color="danger" type="submit">
        Delete
      </Button>
    </form>
  );
}
