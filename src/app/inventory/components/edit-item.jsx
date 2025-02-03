"use client";

import { useActionState } from "react";
import { editItem } from "../actions/action-edit";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export const EditButton = ({ itemData }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [_, formAction, pending] = useActionState(editItem, null);

  const handleSubmit = async (formData) => {
    await formAction(formData);
    onOpenChange(false);
  };

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        Edit
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Edit Item</ModalHeader>
              <ModalBody>
                <form
                  id="editForm"
                  className="space-y-2"
                  action={handleSubmit}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      e.currentTarget.requestSubmit();
                    }
                  }}
                >
                  <input type="hidden" name="id" defaultValue={itemData._id} />

                  <input
                    type="text"
                    name="gudang"
                    placeholder="Input warehouse location"
                    defaultValue={itemData.lokasi_gudang}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
                  <input
                    type="text"
                    name="item"
                    placeholder="Input item"
                    defaultValue={itemData.item}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Input quantity"
                    defaultValue={itemData.quantity}
                    className="w-full px-3 py-2 border rounded-lg"
                    min="0"
                    required
                  />
                  <select
                    name="satuan"
                    defaultValue={itemData.satuan}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  >
                    <option value="kilo">Kilo</option>
                    <option value="liter">Liter</option>
                    <option value="pcs">Pcs</option>
                  </select>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  type="submit"
                  form="editForm"
                  disabled={pending}
                  className="shadow-sm rounded-lg text-white py-1 px-3 bg-blue-500"
                >
                  {pending ? "Updating..." : "Update"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
