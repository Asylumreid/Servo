import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuPalette, LuPencilRuler, LuShapes } from "react-icons/lu";

const Repair = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      w={"100%"}
      mt={6}
      gap={6}
      px={6}
    >
      <ProductCard icon={LuPencilRuler} title={"Handyman tasks"}>
      From minor repairs to general upkeep, our skilled handymen handle all your home maintenance needs with precision and care.
      </ProductCard>

      <ProductCard icon={LuPalette} title={"Furniture assembly"}>
      Save time and hassle with our furniture assembly services, perfect for setting up your new furnishings quickly and correctly.
      </ProductCard>

      <ProductCard icon={LuShapes} title={"Appliance repair"}>
      Extend the life of your appliances with our expert repair services, ensuring they run smoothly and efficiently when you need them most.
      </ProductCard>
    </Grid>
  );
};

export default Repair;
