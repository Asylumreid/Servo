import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuBarChart, LuInstagram, LuMegaphone } from "react-icons/lu";

const Technological = () => {
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
      <ProductCard icon={LuMegaphone} title={"Installing"}>
      Elevate your home's functionality and safety with our expert installation of light fixtures, wiring, technological panels, and outlets, tailored to meet your specific needs.
      </ProductCard>

      <ProductCard icon={LuBarChart} title={"Repairing"}>
      Ensure your technological systems are running safely and efficiently with our professional repair services for light fixtures, wiring, technological panels, and outlets.
      </ProductCard>

      <ProductCard icon={LuInstagram} title={"Removing"}>
      Safely upgrade or modify your technological setups with our skilled removal services for outdated or unnecessary light fixtures, wiring, technological panels, and outlets.
      </ProductCard>
    </Grid>
  );
};

export default Technological;
