import { Box } from "@chakra-ui/react";
import React from "react";
import AdminDataUpdateModal from "../components/AdminDataUpdateModal";

const Admin = () => {
  const updatedata = [
    {
      name: "Update Team",
      func: "",
      modal : "team"
    },
    {
      name: "Update Testimonials",
      func: "",
      modal : "testimonial"
    },
  ];
  return (
    <Box
      m={"140px auto"}
      minH={"80vh"}
      maxW="1300px"
      display={"flex"}
      alignItems={"start"}
      justifyContent={"start"}
      gap={8}
      border={"1px solid red"}
    >
      {/* <AdminDataUpdateModal /> */}
      {updatedata?.length &&
        updatedata?.map((e) => {
          return <AdminDataUpdateModal name={e?.name} func={""} />;
        })}
    </Box>
  );
};

export default Admin;
