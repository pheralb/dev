import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import IconBtns from "src/components/buttons/iconBtns";
import { BiCommand } from "react-icons/bi";
import Form from "src/components/command/form";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("bg.light", "bg.dark");
  return (
    <>
      <IconBtns
        title="Commands (beta)"
        icon={<BiCommand size={22} />}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent bg={bg}>
          <ModalBody p="0" rounded="10">
            <Form />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Index;
