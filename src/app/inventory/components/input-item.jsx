"use client";

import { useActionState } from "react";
import { inputAction } from "../actions/action-input";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export const InputButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [_, InputItem, pending] = useActionState(inputAction, null);

  const handleSubmit = async (formData) => {
    await InputItem(formData);
    onOpenChange(false);
  };

  return (
    <>
      <Button color="warning" onPress={onOpen}>
        Input Item
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add New Item
              </ModalHeader>
              <ModalBody>
                <form
                  id="inputForm"
                  className="space-y-2"
                  action={handleSubmit}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      e.currentTarget.requestSubmit();
                    }
                  }}
                >
                  <input
                    type="text"
                    name="gudang"
                    placeholder="input warehouse location"
                    required
                  />
                  <input
                    type="text"
                    name="item"
                    placeholder="input item"
                    required
                  />
                  <input
                    type="number"
                    name="quantity"
                    placeholder="input quantity"
                    required
                  />
                  <select name="satuan" required>
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
                <button type="submit" form="inputForm" disabled={pending}>
                  {" "}
                  {pending ? "Adding Item..." : "Add Item"}
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
