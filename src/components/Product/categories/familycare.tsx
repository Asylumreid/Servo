import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuLayers, LuPenLine, LuText } from "react-icons/lu";

const Familycare = () => {
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
      <ProductCard icon={LuText} title={"Aircon Familycare"}>
      Keep your aircon running smoothly and efficiently with our professional familycare services, ensuring optimal performance and air quality.
      </ProductCard>

      <ProductCard icon={LuPenLine} title={"Room familycare"}>
      Enjoy a cleaner, healthier living space with our thorough room familycare services, tailored to meet your specific needs.
      </ProductCard>

      <ProductCard icon={LuLayers} title={"Pool familycare"}>
      Maintain a sparkling clean pool with our expert familycare and maintenance services, perfect for hassle-free enjoyment.
      </ProductCard>
    </Grid>
  );
};

export default Familycare;
