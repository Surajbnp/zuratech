import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const AdminDataUpdateModal = ({ name, func }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button w={"200px"} h={"100px"} onClick={onOpen}>
        {name}
      </Button>

      <Modal size={"full"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>{`${name} Data`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            alignItems={"center"}
            justifyContent={"start"}
            flexDir={'column'}
          >
            <Box mt={8} w={"400px"}>
              <form>
                <Box>
                  <label htmlFor="">Name</label>
                  <Input mt={2} color={"white"} placeholder="enter name" />
                </Box>

                <Box mt={4}>
                  <label htmlFor="">Designation</label>
                  <Input
                    mt={2}
                    color={"white"}
                    placeholder="enter designation"
                  />
                </Box>

                <Box mt={4}>
                  <label htmlFor="">LinkedIn</label>
                  <Input
                    mt={2}
                    color={"white"}
                    placeholder="enter linkedin link"
                  />
                </Box>

                <Box mt={4}>
                  <label htmlFor="">Portfolio Link</label>
                  <Input
                    mt={2}
                    color={"white"}
                    placeholder="enter portfolio link"
                  />
                </Box>

                <Button mt={4} p={4} w={'100%'}>Submit</Button>
              </form>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminDataUpdateModal;
